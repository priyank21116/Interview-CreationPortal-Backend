const mongoose= require('mongoose')

const candidateSchema = new mongoose.Schema({
   name:{
      type: String,
      requied: [true ,'Name is mandatory to for further proceedings!'],
   },
   email:{
      type: String,
      requied:[true ,'Email is required to schedule interview']
   },
   appliedfor:{
      type:String,
   }
},{
   timestamps: true
})



module.exports= new mongoose.model('Candidate',candidateSchema)
