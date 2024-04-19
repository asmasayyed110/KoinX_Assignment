const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserBalanceSchema = new mongoose.Schema({
    Address: String,
    balance: String,
    etherPrice:Number,
})
module.exports = mongoose.model('userbalances', UserBalanceSchema) 