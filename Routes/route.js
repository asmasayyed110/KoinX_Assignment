const express = require("express");
const router = express.Router();
const getCrytoTrans= require("../Controllers/getCrytoTransaction")
const GetEtherPrices=require('../GetEtherPricesService/GetEtherPrice')
const getUserBalance=require('../Controllers/getUserBalance&EtherPrice')

router.get('/getCrytoTransactions/:address', getCrytoTrans.getUserTransaction)

router.get('/GetEtherPrices', GetEtherPrices.GetEtherPrices)

router.get('/getUserBalance/:address', getUserBalance.getUserBalance)

module.exports = router;