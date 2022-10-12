const express = require('express')
const router = express.Router()
const {
   getallinterviews,
   postnewInterview,
   updateinterview,
   deleteinterview,
   getinterviewById   
} = require( '../controllers/CInterview')



router.route('/').get(getallinterviews).post(postnewInterview)
router.route('/:id').put(updateinterview).delete(deleteinterview).get(getinterviewById)



module.exports =router