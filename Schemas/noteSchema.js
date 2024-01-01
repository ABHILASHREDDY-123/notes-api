const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        minlength:[3,'Title must have atleast 3 characters'],
        maxLength:[15,'Title must have atmost 15 characters']
    },
    content : {
        type : String,
        required:[true,'content is required'],
        minlength:[1,'Content must have atleast 1 character'],
        maxLength:[500,'Content must have atmost 500 characters']
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' ,
    }
},
{
    timestamps:true
});
const Notes = mongoose.model('notes',noteSchema);
module.exports = Notes;