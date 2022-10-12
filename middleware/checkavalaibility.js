const Candidate = require("../models/Candidate");
const Interviewer = require("../models/Interviewer")
const Interview = require('../models/Interview')


const checkparticipants =(req,res,next) =>{

   let {stime,etime,participants}= req.body
   if (!stime || !etime || !participants){
      res.status(400).json({message: 'Please provide necessary details'})
   }
   stime= new Date(stime)
   etime= new Date(etime)

   if (stime< Date.now()){res.status(400).json({message: 'This is only for schedeling future meetings'})}
   if (etime< stime){res.status(400).json({message: 'Meeting end time details are inappropriate'})}
   
   if (req.body.participants.length < 2){
      res.status(400).json({
         message: "Atleast two participants require to schedule meet"
      })
   }else{
      next()
   }
}

const slotavailiblity =async(req,res,next)=>{
   console.log(req.body)

   let {stime,etime,participants}= req.body
   
   stime= new Date(stime)
   etime= new Date(etime)

   for( const element of participants){
      for await(const doc of  Interview.find()){
         if (doc.participants.includes(element)){
             print(":::::::?????????????????/////////////",doc)
             if (
               element.stime <= doc.stime &&
               element.etime >= doc.stime &&
               element.etime <= doc.etime
            ||
               element.stime >= doc.stime &&
               element.stime <= doc.etime &&
               element.etime >= doc.etime
            ||
            element.stime >= doc.stime && element.etime <= doc.etime
            ||
            element.stime <= doc.startTime && element.etime >= doc.etime) 
            {
               res.status(400).json({message:` Participant ${element.name} have another meeeting at that time frame. You would have to change times`})
            };
         }
      }
   }

   next()
}

module.exports ={checkparticipants,slotavailiblity}
