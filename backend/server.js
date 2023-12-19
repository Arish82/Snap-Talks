const express=require("express");
const app=express();

// dotenv setup
const dotenv=require("dotenv");
dotenv.config();

// importing PORT
const PORT=process.env.PORT;

// Importing router 
const router = require('./routes/userRoutes.js');
const chats = require("./data/chat");

// connecting db.js
require('./config/db')

// router middleware 
app.use(express.json());
app.use(router);

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    // Finding chats with the help of id
    const singleChat= chats.find((chat)=>{
        if(chat._id == req.params.id) return chat;
    })
    // sending single chat with the given id 
    if(!singleChat) res.send("Data not found!")
    res.send(singleChat);
})

// server is created
app.listen(PORT, (err)=>{
    if(err) {
        console.log(`Server failed to response, ${err}`);
        return;
    }
    console.log(`Server is running on PORT, ${PORT}`)
} )