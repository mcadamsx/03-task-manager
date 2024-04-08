const userSchema = require('../model/user.model');
const bcrypt = require('bcrypt')
const userController = {
    getAllUsers: async (request, response)=>{
        try {
            const users = await userSchema.find({})
            response.status(200).json(users)
        } catch (error) {
            response.status(200).json({messahe:error.message})
        }
    },
    addUser: async (request, response)=>{
        try {
            const users = await userSchema.create(request.body)
            response.status(200).json(users)
        } catch (error) {
            response.status(200).json({messahe:error.message})
        }
    }
}
module.exports = userController;