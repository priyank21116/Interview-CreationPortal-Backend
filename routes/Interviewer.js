const express = require('express')
const router = express.Router()
const Interviewer = require("../models/Interviewer")



router.post('/new', async(req,res)=>{
   // console.log("REQUEST CAMEE",req.body)
   const detail= await Interviewer.create(req.body);
   

   res.status(200).json({
      succes: true,
      detail,
   })
})

//  @api - /in/list
router.get('/list', async(req,res)=>{
   
   const intList= await Interviewer.find();
   if(!intList){
      return res.status(203).json({
         succes: false,
         message: 'No interviewer Avalaible'
      })}
   
   res.status(201).json({
      succes: true,
      intList,
   })
})


router.get('/list/:id', async(req,res)=>{
   
   const inte= await Interviewer.findById(req.params.id);
   
   if(!inte){
      return res.status(203).json({
         succes: false,
         message: 'No Interviwer with this id exist '
      })}
   
   res.status(201).json({
      succes: true,
      inte,
   })
})

//@api -  /in/update/:id
router.put('/update/:id', async(req,res)=>{

   let detail = await Interviewer.findById(req.params.id)
   if(!detail){
      return res.status(500).json({  
         succes: false,
         message: 'Could not found the Interviewer details'
      })}

   detail = await Interviewer.findByIdAndUpdate(req.params.id, req.body,{new:true, useFindAndModify:false,runValidators: true})

   res.status(200).json({
      succes: true,
      detail,
   })
})


module.exports =router
