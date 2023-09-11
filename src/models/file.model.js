const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filePath: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    sharedWith: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('File', fileSchema);
