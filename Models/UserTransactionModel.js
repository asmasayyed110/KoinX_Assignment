const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserTransactionSchema = new mongoose.Schema({
    blockNumber: String,
    hash: String,
    from: String,
    to: String,
    value:String,
    timestamp: Number
})
module.exports = mongoose.model('usertransactions', UserTransactionSchema) 

    