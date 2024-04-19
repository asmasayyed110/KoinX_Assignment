const fetch = require('node-fetch');
const cron = require('node-cron');
const etherPriceSchema=require("../Models/GetEtherPrices")

const GetEtherPrices=async function () {
    try {
      // Fetch Ethereum price from an API (e.g., CoinGecko)
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
      const data = await response.json();
      const ethereumPrice = data.ethereum.inr;
  
      // Store Ethereum price in MongoDB
      const newPrice = new etherPriceSchema({ price: ethereumPrice });
      await newPrice.save();
   
      console.log(`Ethereum price fetched and stored: $${etherPriceSchema}`);
    } catch (error) {
      console.error('Error fetching and storing Ethereum price:', error);
    }
  }
  
  // Schedule the task to fetch Ethereum price every 10 minutes
  cron.schedule('*/10 * * * *', GetEtherPrices);
  
  module.exports.GetEtherPrices = GetEtherPrices