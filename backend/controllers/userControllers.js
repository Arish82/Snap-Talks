const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateWebToken = require('../config/generateToken');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler( async (req,res)=>{
    const {name, email, password, pic} = req.body;
    console.log(req.body);
    // checking all required fields
    if(!name || !email || !password) {
        res.status(422).json({message: 'Please enter all feilds', status: 422});
        throw new Error('Please enter all feilds')
    }

    // check for existing user
    const userExist = await User.findOne({email});

    if(userExist) {
        res.status(422).json({message: "User already exist", status : 422})
            throw new Error("User already Exists");
    }
    
    // creating a user
    const user = await User.create({
        name,
        email,
        password,
        pic,
    })
    
    if(user) {
        res.status(201).json({
            message: 'User created successfully',
            email: user.email,
            name: user.name,
            password: user.password,
            token: generateWebToken(user._id)
        });
    }
    
    res.status(500).json({message: "Server Error"});
    throw new Error('Server Error');

})

const authUser = asyncHandler( async (req,res)=>{
    const {password, email} =req.body;
    if(!password || !email) {
        res.status(422).json({message: 'Please enter all feilds', status: 422});
        console.error('Please enter all feilds')
    }
    else{
        const userExist=await User.findOne({email});
    
        if(!userExist){
            res.status(400).json({message: "Invalid Credentials", status: 400});
            console.error("Invalid Credentials");
        }
        else{
            const match = await bcrypt.compare(password, userExist.password);
            if(!match){
                res.status(400).json({message: "Invalid Credentials", status: 400});
                console.error("Invalid Credentials");
            }
            else{
                res.status(201).json({message: "Login SuccessFull",userExist});
            }
        }
    }
})

const allUsers = asyncHandler( async (req,res)=>{
    const keyword = req.query.search ? {
        $or: [
            {name: {$regex: req.query.search, $options: "i"}},
            {email: {$regex: req.query.search, $options: "i"}}
        ]
    }: {};
    const users = await User.find(keyword).find({_id: {$ne: req.user._id}});
    res.send(users);
})

module.exports = { registerUser, authUser, allUsers };