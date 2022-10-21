const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/db1",{
    useNewUrlParser:true
}).then(() => {
    console.log("Succesfully ");
}).catch((err) => {
    console.log(err);
});