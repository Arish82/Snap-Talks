const express=require("express");
const chats = require("./data/chat");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
const PORT=process.env.PORT;

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

// app is listening on PORT 5000
app.listen(PORT, (err)=>{
    if(err) {
        console.log(`Server failed to response, ${err}`);
        return;
    }
    console.log(`Server is running on PORT, ${PORT}`)
} )