import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    yearsOfPractice: {
        type: Number,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    // location: {
    //     type: [Number],
    //     required: true,
    // },
});

export const doctorModel = mongoose.model("doctor", doctorSchema);