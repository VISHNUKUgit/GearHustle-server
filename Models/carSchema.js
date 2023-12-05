const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    uploderId:{type: String, required:true},
    model: { type: String, required: true },
    distance: { type: String, required: true },
    option: { type: String, required: true },
    size: { type: String, required: true },
    year: { type: String, required: true },
    transmission: { type: String, required: true },
    seats: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    images: { type: [String], required: true } // Assuming images is an array of strings (file paths or URLs)
});

const ads = mongoose.model('ads', carSchema);

module.exports = ads;
