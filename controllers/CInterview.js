const Interview = require('../models/Interview')
const {checkparticipants} = require('../middleware/checkavalaibility')


const getallinterviews=async(req,res)=>{
  
   const goals = await Interview.find()
   res.status(200).json(goals)

}

const getinterviewById = async(req,res)=>{
   let Idetail = await Interview.findById(req.params.id)
   res.status(200).json(Idetail)
}


const postnewInterview=async(req,res)=>{

   let obj ={
      participants: req.body.participants,
      stime: new Date((req.body.stime)),
      etime : new Date((req.body.etime)),
      discription: req.body.discription
   }


   const detail = await Interview.create(obj)
   .then(res.status(200).json({ succes:true, message:"Scheduled new interview"}))
   // .catch(error => res.send(error)) 

   // res.status(200).json({succes : true ,detail})
}


const updateinterview=async(req,res)=>{
   let detail = await Interview.findById(req.params.id)
   // if (!req.body){
   //    res.status(403).json({ succes:false, message:"Data not avalaible"})  
   //    // throw new Error('Please add neccesary details') // Default error handler --html page
   // }

   if(!detail){
      return res.status(500).json({
         succes: false,
         message: 'Could not found the Interviewer details'
      })}


   detail = await Interview.findByIdAndUpdate(req.params.id, req.body,{new:true, useFindAndModify:false,runValidators: true})

   res.status(200).json({
      succes: true,
      message:"Interview Updated Sucessfully",
      detail,
   })
}


const deleteinterview = async(req,res)=>{
   const intervieww= await Interview.findById(req.params.id)
   if(!intervieww){
      return res.status(500).json({
         succes: false,
      message: 'Could nnot found the interview'
      })
   }
   intervieww.remove()
   res.status(200).json({
      succes: true,
      message: 'Interview is removed from schedule'
   })
}


module.exports ={
   getallinterviews,postnewInterview,updateinterview,deleteinterview,getinterviewById
}