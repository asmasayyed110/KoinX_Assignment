const UserTransactionModel=require("../Models/UserTransactionModel")

require("dotenv").config();
const { ETHERSCAN_API_KEY } = process.env;
const axios = require('axios');


const getUserTransaction= async function(req,res){
    try{
    const address = req.params.address;
    const apiEndpoint = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`;
    const response = await axios.get(apiEndpoint);
    const transactions = response.data.result;
    await UserTransactionModel.insertMany(transactions);
    res.json(transactions);
}catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports.getUserTransaction = getUserTransaction