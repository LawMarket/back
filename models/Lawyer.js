const mongoose = require('mongoose');


const LawyerSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required : true
    },
    lastName :{
        type: String,
        required : true
    },
    email :{
        type: String,
        required : true,
        unique:true
    },
    phoneNumber :{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required: true
    },
    lawyerPic:{
        type: String,
    },
    isLawyer:{
        type:Boolean,
        required:true,
        default:true
    },
    date:{
        type:Date,
        required:true,
        default: Date.now
    }
});


module.exports = Lawyer = mongoose.model('lawyer',LawyerSchema)