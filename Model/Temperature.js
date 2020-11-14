const mongoose = require('mongoose');

const TemperatureSchema = new mongoose.Schema({
    
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dt:{
        type: String,
        required:true,
    },
    degree:{
        type: String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },

    
},{ getters: true });

const Temperature = mongoose.model('Temperature', TemperatureSchema);

module.exports = Temperature;