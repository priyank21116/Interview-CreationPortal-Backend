const Interview = require('../models/Interview')


// @desc Get Goals
// @route GET  -- > /api/
// @access Private
const getallinterviews=async(req,res)=>{
  
   const goals = await Interview.find()
   res.status(200).json(goals)

}

const getinterviewById = async(req,res)=>{
   let Idetail = await Interview.findById(req.params.id)
   res.status(200).json(Idetail)
}

// @desc Make Goals
// @route POST --->  /api/
// @access Private
const postnewInterview=async(req,res)=>{
   console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::","Hello")
   // req.body.stime : new Date(JSON.parse(req.body.stime))
   // req.body.etime = new Date(JSON.parse(req.body.etime))
   // console.log()
   let obj ={
      participants: req.body.participants,
      stime: new Date((req.body.stime)),
      etime : new Date((req.body.etime)),
      discription: req.body.discription
   }

   console.log(obj)
   // if (!req.body){
   //    res.status(403).json({ succes:false, message:"Data not avalaible"})  
   //    // throw new Error('Please add neccesary details') // Default error handler --html page
   // }
   // if (req.body.participants.length < 2){
   //    res.status(403).json({ succes: false, message:"There has to be 2 or more Participants in an interview"})
   // }

   const detail = await Interview.create(req.body)
   // .then(res.send(obj)).catch(error => res.send(error))

   res.status(200).json({succes : true ,detail})
}

// @desc Update Goals
// @route GET/api/:id
// @access Private
const updateinterview=async(req,res)=>{
   let detail = await Interview.findById(req.params.id)
   if (!req.body){
      res.status(403).json({ succes:false, message:"Data not avalaible"})  
      // throw new Error('Please add neccesary details') // Default error handler --html page
   }

   if(!detail){
      return res.status(500).json({
         succes: false,
         message: 'Could not found the Interviewer details'
      })}

   if (req.body.participants.length < 2){
         res.status(403).json({ succes: false, message:"There has to be 2 or more Participants in an interview"})
      }

   detail = await Interview.findByIdAndUpdate(req.params.id, req.body,{new:true, useFindAndModify:false,runValidators: true})

   res.status(200).json({
      succes: true,
      detail,
   })
}

// @desc delete Goals
// @route GET /api/:id
// @access Private
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