const Interview = require('../models/Interview')
// const {checkparticipants} = require('../middleware/checkavalaibility')
const {newschedule,updateInterviewmail,interviewCancelled} = require('../middleware/NodeMailer')




const getallinterviews=async(req,res)=>{
  
   const goals = await Interview.find()
   res.status(200).json(goals)

}

const getinterviewById = async(req,res)=>{
   let Idetail = await Interview.findById(req.params.id)
   res.status(200).json(Idetail)
}


const postnewInterview=async(req,res)=>{
// console.log("????????????????????????",req.body)
   let obj ={
      participants: req.body.participants,
      stime: new Date((req.body.stime)),
      etime : new Date((req.body.etime)),
      discription: req.body.discription
   }


    await Interview.create(obj)
   .then((detail)=>{
      newschedule(detail);
      res.status(200).json({ succes:true, message:"Interview scheduled successfully. Participants have been notified through mail"})
   }
)
   // .catch(error => res.send(error)) 

  
}


const updateinterview=async(req,res)=>{
  
   // if (!req.body){
   //    res.status(403).json({ succes:false, message:"Data not avalaible"})  
   //    // throw new Error('Please add neccesary details') // Default error handler --html page
   // }
   let detail = await Interview.findById(req.params.id)
   if(!detail){
      return res.status(500).json({
         succes: false,
         message: 'Could not found the Interviewer details'
      })}


   detail = await Interview.findByIdAndUpdate(req.params.id, req.body,{new:true, useFindAndModify:false,runValidators: true})
   .then(()=>{
       updateInterviewmail(detail);
      res.status(200).json({
         succes: true,
         message:"Interview Updated Successfully. Participants have been notified",
         detail,
      })
   })

  
}


const deleteinterview = async(req,res)=>{
   const intervieww= await Interview.findById(req.params.id)
   if(!intervieww){
      return res.status(500).json({
         succes: false,
      message: 'Could not found the interview.'
      })
   }
   intervieww.remove()
   interviewCancelled(intervieww)
   res.status(200).json({
      succes: true,
      message: 'Interview is removed from schedule.Participants have been informed'
   })
}


module.exports ={
   getallinterviews,postnewInterview,updateinterview,deleteinterview,getinterviewById
}