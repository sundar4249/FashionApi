const express = require('express');
const router =express.Router();
const Female = require('../models/Female')
const auth = require('../auth');

router.post('/Female',(req,res,next)=>{
    Female.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Female Item Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Female.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;