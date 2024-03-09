import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
    usertext: {
        day: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    },
    docid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true,
    },
});

export const slotModel = mongoose.model("slot", slotSchema);