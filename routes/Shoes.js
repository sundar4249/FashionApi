const express = require('express');
const router =express.Router();
const Shoes = require('../models/Shoes')
const auth = require('../auth');

router.post('/shoes',(req,res,next)=>{
    Wines.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Shoes Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Shoes.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;