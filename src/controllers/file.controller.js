const File = require('../models/file.model');

exports.getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).send({ message: 'File not found.' });
        }
        res.send(file);
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).send({ message: 'Error fetching file.' });
    }
};

exports.getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.send(files);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).send({ message: 'Error fetching files.' });
    }
};

exports.createFile = async (req, res) => {
    try {
        const file = new File(req.body);
        await file.save();
        res.status(201).send(file);
    } catch (error) {
        console.error('Error creating file:', error);
        res.status(500).send({ message: 'Error creating file.' });
    }
};

exports.updateFile = async (req, res) => {
    try {
        const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFile) {
            return res.status(404).send({ message: 'File not found.' });
        }
        res.send(updatedFile);
    } catch (error) {
        console.error('Error updating file:', error);
        res.status(500).send({ message: 'Error updating file.' });
    }
};

exports.removeFile = async (req, res) => {
    try {
        const file = await File.findByIdAndRemove(req.params.id);
        if (!file) {
            return res.status(404).send({ message: 'File not found.' });
        }
        res.send({ message: 'File removed successfully.' });
    } catch (error) {
        console.error('Error removing file:', error);
        res.status(500).send({ message: 'Error removing file.' });
    }
};
