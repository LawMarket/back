const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    lawyer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lawyer'
    },
    status :{
        type: String,
        required : true,
        default:'נשלח לעו״ד'
    },
    howMuchToPay:{
        type:String,
        required:true,
        default:'0'
    },
    isPaid :{
        type: Boolean,
        required : true,
        default: false
    },
    requestDate :{
        type: Date.now,
        required : true,
    },
    serviceKind:{
        type: String,
        required: true,
        default:''
    },
    financialAgreement:[
        {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        bornDate:{
            type:String
        },
        gender:{
            type:String
        },
        description:{
            type:String
        }
        },
        {
            firstName:{
                type:String
            },
            lastName:{
                type:String
            },
            email:{
                type:String
            },
            bornDate:{
                type:String
            },
            gender:{
                type:String
            },
            description:{
                type:String
            }
            }
    ],
});


module.exports = Service = mongoose.model('service',ServiceSchema)