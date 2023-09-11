const User = require('../models/user.model');
const Doctor = require('../models/doctor.model');
const Patient = require('../models/patient.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../helpers/auth.helper');

exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists.' });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    const user = new User(req.body);
    const savedUser = await user.save();

    // Depending on the role, create a doctor or patient profile
    if (savedUser.role === 'doctor') {
      const doctor = new Doctor({
        userId: savedUser._id,
      });
      await doctor.save();
    } else if (savedUser.role === 'patient') {
      const patient = new Patient({
        userId: savedUser._id,
      });
      await patient.save();
    }

    console.log(`User registered with ID: ${savedUser._id}`);
    res.status(200).send({
      auth: true,
      token: generateToken(savedUser._id, savedUser.role),
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).send({ message: 'Error during user registration.' });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    const passwordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordValid) {
      console.log('Invalid password attempt for user:', req.body.email);
      return res.status(401).send({ message: 'Invalid password.' });
    }

    console.log(`User logged in with ID: ${user._id}`);
    res.status(200).send({
      auth: true,
      token: generateToken(user._id, user.role),
      role: user.role,
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).send({ message: 'Error during user login.' });
  }
};
