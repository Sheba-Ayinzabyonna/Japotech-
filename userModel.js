const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    clientName: {
        type: String,
        
    },
    clientContact: {
        type: String,
        
        
        
    },
    clientEmail: {
        type: String,
        
        
        
    },
    clientAddress : {
        type: String,
        
        
        
    },
    clientStatus: {
        type: String,
        
    },
   
   
})
const User = mongoose.model('User', userSchema)

module.exports = User
