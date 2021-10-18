const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    noteDescription:{
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    priority:{
        type: String,
        pr :["High","Medium","Low"]
    },
    dateAdded:{
        type:String,
        format : Date,
    },
    dateUpdated:{
        type:String,
        format : Date,
    }
});

const notes = mongoose.model("notes",noteSchema);
module.exports = notes;