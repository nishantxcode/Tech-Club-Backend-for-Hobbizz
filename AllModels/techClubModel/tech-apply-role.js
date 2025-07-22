const mongoose = require('mongoose');

const techDRoleSchema = new mongoose.Schema({
    appliedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TECHCABINATE",
        required: true
    },
    club: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
}, { timestamps: true });

mongoose.model("TECHDROLE", techDRoleSchema);