const validator = require('validator')
const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value))
            throw new Error('Email is invalid')
        }
    },
    password: {
        type:String,
        required:true,
        minlenght: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('Password')){
                throw new Error('Password cannot contain "Password"')
            }
        }
        
    } 
})

module.exports=User
