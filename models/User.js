// https://mongoosejs.com/docs/geojson.html
import mongoose from 'mongoose'

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    username: { default: 'guest' },
    location: {
        type: pointSchema,
        required: true
    }
});