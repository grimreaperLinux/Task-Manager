const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./tasks')

const userSchema = new mongoose.Schema({
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
        unique: true,
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
        
    },
    tokens: [{
        token: {
            type:String,
            required:true
        }
    }],
    avatar: {
        type: Buffer
    } 
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField:'_id',
    foreignField: 'owner'
})


userSchema.methods.generateAuthToken = async function() { //this function is accessible to a instance of a model
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'hehhehehhe')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token

}

userSchema.methods.toJSON = function () { // toJSON function runs whenever object gets stringifyed into JSON
                                          // which is what res.send does to a object
                                          // (runs JSON.stringify in the background)
    const user = this
    const userObject = user.toObject ()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.statics.findByCredentials = async (email,password) => { //this function is accessible to a model itself.
    const user = await User.findOne({email})                       //Static functions are also known as model functions

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

//hash the plain text password
userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

//Delete user's tasks when user's profile is deleted
userSchema.pre('remove', async function (next) {
    const user = this
    Task.deleteMany({ owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema )

module.exports=User
