const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/backend").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})