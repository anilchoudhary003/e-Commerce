const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
user :{
    type : String,
    required: true,
},
email : {
    type :String,
     required: true,
},
pass:{
    type:Number,
     maxLength: 8,
      required: true,
},

});
const login = mongoose.model("login",dataSchema);
module.exports = login;