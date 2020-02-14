const express = require('express');
const router = express.Router();
const update = require('../models/update');
const auth = require('../auth');

router.post('/create',(req,res,next)=>{
    update.create({
        name:req.body.name,
        product:req.body.product,
        date: req.body.date
    }).then((callbacks)=>{
        res.json({status:"item created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);
});
router.get('/all',(req,res,next)=>{
    help.find({})
    .then((callbacks)=>{
        res.json(callbacks);
    })
    .catch((err)=>{
        res.send(err)
    })
});
module.exports=router;