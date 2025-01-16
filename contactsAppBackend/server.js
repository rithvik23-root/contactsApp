const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Contact = require("./models/ContactSchema");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/contacts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.post('/contacts', async(req,res)=>{
    try{
        const{name,email}=req.body;
        if(!email||!name){
            return res.status(400).json({message:'Email and Name are required'});
        }
        const contact=new Contact({name,email});
        await contact.save();
        res.status(201).json(contact);
    }catch(err){
        res.status(500).json({error:err.message});
    }
})




const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
