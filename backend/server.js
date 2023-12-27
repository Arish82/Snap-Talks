const express=require("express");
const app=express();

// dotenv setup
const dotenv=require("dotenv");
dotenv.config();

// importing PORT
const PORT=process.env.PORT;

// Importing router 
const userRoutes = require('./routes/userRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');

// connecting db.js
require('./config/db')

// router middleware 
app.use(express.json());
app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

// server is created
app.listen(PORT, (err)=>{
    if(err) {
        console.log(`Server failed to response, ${err}`);
        return;
    }
    console.log(`Server is running on PORT, ${PORT}`)
} )