const mongoose= require('mongoose')

const interview = mongoose.Schema({
   participants:{
      type: Array

   },
   stime:{
      type: Date,
      requied: [true ,'Start time is mandatory!'],

   },
   etime:{
      type: Date,
      requied: [true ,'Its mandatory to provide endtime of interview!'],

   },
   
   discription:{
      type: String
   }
})

module.exports= mongoose.model('Interview',interview)