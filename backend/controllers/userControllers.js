const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler( async (req,res)=>{
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password) {
        res.status(400).json({message: 'Please enter all feilds', status: 400});
        throw new Error('Please enter all feilds')
    }

    const userExist = await User.findOne({email});

    if(userExist) {
        res.status(400).json({message: "User already exist", status : 400})
            throw new Error("User already Exists");
    }
    
    const user = await User.create({
        name,
        email,
        password,
        pic
    })

    if(user) {
        res.status(201).json({
            message: 'User created successfully',
            email: user.email,
            name: user.name
        });
    }
    
    res.status(500).json({message: "Server Error"});
    throw new Error('Server Error');

})

module.exports = { registerUser }