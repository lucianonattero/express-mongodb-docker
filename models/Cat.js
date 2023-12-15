const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({

    cat:{
        type: String,
        required: true,
    }
    
});

module.exports = new mongoose.model("Cat", CatSchema);