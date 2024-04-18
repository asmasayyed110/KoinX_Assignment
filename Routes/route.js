const express = require("express");
const router = express.Router();
const getCrytoTrans= require("../Controllers/getCrytoTrans")
const GetEtherPrices=require('../GetEtherPricesService/GetEtherPrice')
const getUserBalance=require('../Controllers/getUserBalance')

router.get('/getCrytoTransactions/:address', getCrytoTrans.getUserTransaction)

router.get('/GetEtherPrices', GetEtherPrices.GetEtherPrices)

router.get('/getUserBalance/:address', getUserBalance.getUserBalance)

// // if api is invalid OR wrong URL
// router.all("/*", function (req, res) {
//     res
//       .status(404)
//       .send({ status: false, msg: "The api you requested is not available" });
//   });
  
  module.exports = router;