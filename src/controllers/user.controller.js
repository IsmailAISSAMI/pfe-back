const User = require('../models/user.model');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }

        console.log(`Fetched user with ID: ${user._id}`);
        res.send(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ message: 'Error fetching user.' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found.' });
        }

        console.log(`Updated user with ID: ${updatedUser._id}`);
        res.send({ user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ message: 'Error updating user.' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({ isDeleted: false });
        console.log('Fetched all users.');
        res.send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Error fetching users.' });
    }
};

exports.removeUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id, isDeleted: false },
            { isDeleted: true },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found or already deleted.' });
        }

        console.log(`Soft deleted user with ID: ${updatedUser._id}`);
        res.send({ user: updatedUser });
    } catch (error) {
        console.error('Error soft deleting user:', error);
        res.status(500).send({ message: 'Error soft deleting user.' });
    }
};
