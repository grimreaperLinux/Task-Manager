const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         trim: true
//     },
//     age:{
//         type: Number,
//         default: 0,
//         validate(value){
//             if (value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if(!validator.isEmail(value))
//             throw new Error('Email is invalid')
//         }
//     },
//     password: {
//         type:String,
//         required:true,
//         minlenght: 7,
//         trim: true,
//         validate(value){
//             if(value.toLowerCase().includes('Password')){
//                 throw new error('Password cannot contain "Password"')
//             }
//         }
        
//     } 
// })

// const me = new User({
//     name:'Aniket Raj',
//     age: -20,
//     email: 'Mikeapp@gmail.com',
//     password:'        re32     '
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true
//     },
//     completed:{
//         type: Boolean
//     } 
// })

// const task = new Task({
//     description:'Learning Mongoose baby', 
//     completed:false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log('Error!', error)
// })