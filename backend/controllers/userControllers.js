const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateWebToken = require('../config/generateToken');

const registerUser = asyncHandler( async (req,res)=>{
    const {name, email, password, pic} = req.body;
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
            token: generateWebToken(user._id)
        });
    }
    
    res.status(500).json({message: "Server Error"});
    throw new Error('Server Error');

})

module.exports = { registerUser }