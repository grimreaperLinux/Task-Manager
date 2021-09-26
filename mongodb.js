const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID =mongodb.ObjectId
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database')
    }
    const db = client.db(databaseName)

    //     db.collection('unstable').insertOne({
    //         name: 'Aniket Raj',
    //         age: 20
    //     },(error,result) => {
    //         if(error)
    //         return console.log("Unable to insert user")

    //         console.log(result.insertedId)
    //     }) 

    // db.collection('unstable').insertMany([{
    //     name: 'Salvatore',
    //     age: 175
    // },
    // {
    //     name: 'mikaelson',
    //     age: 1000
    // }], (error, result) => {
    //     if (error)
    //         return console.log("Unable to insert user")

    //     console.log(result.insertedIds)
    // })

    // db.collection('unstable').findOne({ name : 'Salvatore'} , (error, user) => {
    //     if(error)
    //     return console.log("couldn't fetch user")
        
    //     console.log(user)
    // })

    // db.collection('unstable').find({age:20}).toArray((error,users) => {
    //     console.log(users)
    // })

    // db.collection('unstable').find({age:20}).count((error,users) => {
    //     console.log(users)
    // })

    // db.collection('unstable').updateOne({
    //     _id: new ObjectID("6144c496c2b58617bdb5c81f")
    // }, {
    //     $set: {
    //         name: 'Mikael'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('unstable').deleteMany({
        name:'Aniket Raj'
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})