// const UserModel=require("../Models/UserTransactionModel")

require("dotenv").config();
const { ETHERSCAN_API_KEY } = process.env;
const axios = require('axios');
const UserBalanceSchema=require('../Models/UserBalanceModel')

const getUserBalance= async function(req,res){
    try{
    const address = req.params.address;
    const apiEndpoint = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`;
    const balanceResponse = await axios.get(apiEndpoint);
    const balance = balanceResponse.data.result;
    
    const priceResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
    const etherPrice = priceResponse.data.ethereum.inr;
  
    const data = {
      Address : address,
      balance : balance,
      etherPrice : etherPrice
    }
    
    //Storing the balances and etherprices fetched in the database against the address of the user
    await UserBalanceSchema.insertMany(data);
    res.json({address,balance,etherPrice});
    
}catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports.getUserBalance = getUserBalance