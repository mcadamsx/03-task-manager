const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide name'],
            minlength: 3,
            maxlength: 50,
          },
          email: {
            type: String,
            unique: true,
            required: [true, 'Please provide email'],
            validate: {
              validator: validator.isEmail,
              message: 'Please provide valid email',
            },
          },
          password: {
            type: String,
            required: [true, 'Please provide password'],
            minlength: 8,
          },
    }
)
module.exports = mongoose.model(user,usersSchema)