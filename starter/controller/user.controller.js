
const userSchema = require('../model/user.model');
const bcrypt = require('bcrypt')



// const jwt = require('jsonwebtoken'); 
const userController = {
    getAllUsers: async(request, response) => {
        try {
          const User = await userSchema.find({});
          response.status(200).json(User);
        } catch (error) {
        //   response.status(404).json({ message: error.message });
        }
      },
    // getAllUsers: async (request, response)=>{
    //     try {
    //         const users = await userSchema.find({})
    //         response.status(200).json(users)
    //     } catch (error) {
    //         response.status(200).json({messahe:error.message})
    //     }
    // },
    // addUser: async (request, response)=>{
    //     try {
    //         const users = await userSchema.create(request.body)
    //         response.status(200).json(users)
    //     } catch (error) {
    //         response.status(200).json({messahe:error.message})
    //     }
    // },
    registerUser: async(request, response)=>{
        try {
            const {username,email, password, image} = request.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const newUser = new userSchema({
                email,
                username:username,
                password: hashedPassword,
                image,
            });
            await newUser.save();
            response.status(200).json("New user created successfully")
        } catch (error) {
            response.status(404).json({message:error.message})
            
        }
    },
}

module.exports = userController;

