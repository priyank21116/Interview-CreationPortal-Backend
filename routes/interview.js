const express = require('express')
const router = express.Router()
const {
   getallinterviews,
   postnewInterview,
   updateinterview,
   deleteinterview,
   getinterviewById   
} = require( '../controllers/CInterview')

const {checkparticipants, slotavailiblity} = require('../middleware/checkavalaibility')



router.route('/').get(getallinterviews).post(checkparticipants,slotavailiblity,postnewInterview)
router.route('/:id').put(checkparticipants, slotavailiblity,updateinterview).delete(deleteinterview).get(getinterviewById)

   

module.exports =router