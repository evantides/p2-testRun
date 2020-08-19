const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create
const vegSchema = new Schema({
    name: {type: String, required: true},
    isGreen: Boolean
},{timestamps: true})

//model
const Vegetable = mongoose.model("Vegetable", vegSchema);

module.exports = Vegetable;
