const express = require('express');
const router =express.Router();
const Male = require('../models/Male')
const auth = require('../auth');

router.post('/male',(req,res,next)=>{
    Male.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Male Item Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Male.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;