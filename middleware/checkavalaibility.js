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
   }
   next()

}

const slotavailiblity =async(req,res,next)=>{
   // console.log(req.body)

   let {stime,etime,participants}= req.body
   
   stime= new Date(stime)
   etime= new Date(etime)

   for( const element of participants){ 
      // console.log("???????????????????????????",element)
     
      for await(const doc of  Interview.find()){
         
         for (const dbelement of doc.participants){
             if (dbelement._id === element._id){
            
             if (
               (stime <= doc.stime &&
               etime >= doc.stime && 
               etime <= doc.etime )
            ||
               (stime >= doc.stime &&
               stime <= doc.etime &&
               etime >= doc.etime)
            ||
            (stime >= doc.stime && etime <= doc.etime)
            ||
            (stime <= doc.startTime && etime >= doc.etime) 
            ){
               res.status(400)
               .json({message:`Participant ${element.name} have another meeeting at that time frame. You would have to change times`})
               return
            };
         }} 
      }
   }

   next()
}

module.exports ={checkparticipants,slotavailiblity}
