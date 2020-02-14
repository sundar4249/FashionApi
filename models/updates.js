const mongoose = require("mongoose");

const updatesSchema = new mongoose.Schema({
    name:{
        type:String,
        reqired:true
    },
    product:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('update',updatesSchema);