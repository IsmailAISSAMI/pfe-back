require("dotenv").config();

const config = require("../configs");
const router = require("express").Router();

const { stripe_Key, client_url } = config.stripe 

const stripe = require("stripe")(stripe_Key);

const initiateStripeSession = async (req) => {
  const { price, id } = req.body?.invoice || {}
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "eur",
        product_data: {
          name: `Invoice ${consultation}`,
        },
        unit_amount: (price * 100).toFixed(0),
      },
      quantity: 1,
    }],
    payment_intent_data: {
      metadata: {
        id
      },
    },
    mode: "payment",
    success_url: `${client_url}/success`,
    cancel_url: `${client_url}/canceled`,
  });

  return session;
};

router.post(
  "/",
  (createSession = async function (req, res) {
    try {
      const session = await initiateStripeSession(req);
      res.status(200).json({
        id: session.id,
        price: session.amout_total,
        currency: session.currency,
        success_url: session.success_url,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })
);
module.exports = router;
