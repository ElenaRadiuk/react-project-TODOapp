// import express from 'express';

// const app = express();

// const server = app.listen(8080, () => {
//     console.log("start port 8080");
// })

// module.exports = app;

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

var application_root = __dirname,
path = require( 'path' );

mongoose.connect('mongodb://localhost/chat', {useNewUrlParser: true});

var db = mongoose.connection;

console.log(db);


var messageSchema = new mongoose.Schema({
    nick: String,
    message: String
});

var Message = mongoose.model('Message', messageSchema);

db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());

app.use( express.static( path.join( application_root, 'site') ) );

// [
//     {name: 'petya'},
//     {name: 'vasya'},
// ]

app.get('/message', async (req, res) => res.send(await Message.find()))
app.get('/message/:id', async (req, res) => 
            res.send(
                await Message.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
            )
    )

app.post('/message', async (req, res) => {
    let newMessage = new Message(req.body)
    await newMessage.save()
    res.status(201).send(newMessage)
})


// var schema = buildSchema(`
//   type Query {
//     getMessage: [Message]

//   }

//   type Mutation {
//     addMessage(nick: String!, message: String!) : Message
//   }

//   type Message {
//     _id: ID,
//     nick: String,
//     message: String
//   }
// `)

// var root = {
//   async getMessages(){
//       return await Message.find({})
//   },
  
//   async addMessage({nick, message}){
//       Message.create({nick, message})
//   }
// }
// app.use('/graphql', express_graphql({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


