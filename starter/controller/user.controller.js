
const userSchema = require('../model/user.model');
const bcrypt = require('bcrypt')

const userController = {
    
    loginUser: async(request, response) => {
        try {
          const User = await userSchema.findOne({username: request.body.username});
          if(!User){
            return response.status(404).send({error: "User not found"})
          }
          const validPassword = await bcrypt.compare(
            request.body.password,
            User.password
          )
          if(!validPassword){
            response.status(403).json ("Invalid password");
          } else {
            response.status(200).json(User)
          }
        } catch (error) {
          response.status(404).json({ message:error.message });
        }
      },

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

