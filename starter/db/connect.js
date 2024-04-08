const mongoose = require('mongoose');

const connectDB = (url) => {
    mongoose.connect(url)
    .then(()=>{
        console.log('connected to database ')
    })
    .catch(()=>{
        console.log("unable to coonect to databse");
    }) 
}
module.exports = connectDB