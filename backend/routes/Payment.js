const express = require('express')
const route = express.Router()
const {auth,IsUSER} = require('../middlewares/verification')
const {MakePayment,Verifypayment,MakePdf} = require('../controllers/common/Payment')
// DONE
route.post("/Make-Payment",MakePayment)
route.post("/Verify-Payment",Verifypayment)
// This is the route that will make the pdf of that ticket
route.get('/download/:ticketId',MakePdf)
// DONE

module.exports = route