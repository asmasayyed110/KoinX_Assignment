const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const etherPriceSchema = new mongoose.Schema({
    price: Number,
    timestamp: { type: Date, default: Date.now }
  });
  module.exports = mongoose.model('EtherPrices', etherPriceSchema) 