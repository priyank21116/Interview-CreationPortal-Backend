const mongoose= require('mongoose')

const InterviewerSchema = new mongoose.Schema({
   name:{
      type: String,
      requied: [true ,'Name is mandatory!'],
   },
   email:{
      type: String,
      requied:[true ,'Email is necessarly required !']
   },
   position: String,

},{
   timestamps: true
})

module.exports =new mongoose.model('Interviewer',InterviewerSchema)