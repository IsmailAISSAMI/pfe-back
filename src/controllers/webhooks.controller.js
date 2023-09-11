require("dotenv").config();
const Invoice = require("../models/invoice.model");
const config = require("../configs");

const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = require("express").Router();

const webhookSecret = config.stripe.webhook_secret_key

router.post(
  "/stripe",
  (stripewebhook = (req, res) => {
    let data;
    let eventType;
    if (webhookSecret) {
      let event;
      let signature = req.headers["stripe-signature"];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err);
        return res.sendStatus(400);
      }
      data = event.data;
      eventType = event.type;
    } else {
      data = req.body.data;
      eventType = req.body.type;
    }

    console.log(eventType);
    if (eventType === "payment_intent.succeeded") {
      Invoice.findByIdAndUpdate(data.object.metadata.id, { isPayed: true }, {
        new: true,
      })
        .then(() => {
          res.send({  message: `Invoice ${req.params.id} was deleted`, });
        })
        .catch((err) => res.status(500).json({ err: err }));
    }
    res.sendStatus(200);
  })
);

module.exports = router;
