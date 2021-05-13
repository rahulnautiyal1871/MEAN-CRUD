const mongoose = require('mongoose');
var conn=mongoose.Collection;

var userSchema=new mongoose.Schema({

    full_name:{
        type:String,   
    },
    email:{
        type:String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        index:{
            unique:true,
        }
    },
    dob:{
        type:String,
        trim:true
    },
    
    password:{
        type:String,
        trim:true
    },
    address:{
        type:String,   
    },
    status:{
        type:Boolean,
        default:true
    },	
	date:{
		type:Date,
		default:Date.now
	},

    
})


var userModal=mongoose.model('client',userSchema,'clients');
module.exports=userModal
