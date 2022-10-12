const express = require('express')
const router = express.Router()
const Candidate = require("../models/Candidate");

 


router.post('/new', async(req,res)=>{
   // console.log("REQUEST CAMEE",req.body)
   const candidatee= Candidate.create(req.body);
  
   res.status(200).json({
      succes: true,
      candidatee,
   })
})

// @api - /cd/list
router.get('/list', async(req,res)=>{
   
   const cdList= await Candidate.find();
   if(!cdList){
      return res.status(203).json({
         succes: false,
         message: 'No Candidate Avalaible'
      })}
   
   res.status(201).json({
      succes: true,
      cdList,
   })
})

router.get('/list/:id', async(req,res)=>{
   
   const cd= await Candidate.findById(req.params.id);
   
   if(!cd){
      return res.status(203).json({
         succes: false,
         message: 'No Candidate with this id exist '
      })}
   
   res.status(201).json({
      succes: true,
      cd,
   })
})

//@api -  /cd/update/:id
router.put('/update/:id', async(req,res)=>{

   let detail = await Candidate.findById(req.params.id)
   if(!detail){
      return res.status(500).json({
         succes: false,
         message: 'Could not found the Candidate details'
      })}
   

   detail = await Candidate.findByIdAndUpdate(req.params.id, req.body,{new:true, useFindAndModify:false,runValidators: true})

   res.status(200).json({
      succes: true,
      detail,
   })
})

module.exports =router
