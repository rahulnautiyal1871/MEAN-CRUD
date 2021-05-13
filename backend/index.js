require('./helper/mongodb')
const express = require('express');
const app = express();
const port = 3000 ;
var cors = require('cors');
var logger       = require('morgan');

const userModal = require('./schemas/user')

app.use(cors())
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-user', async (req,res)=>{
    const body = {...req.body}; 
    const [
        fullName, 
        email,
        address,
        dob,
        password
      ] = [
        body.fullName, 
        body.email,
        body.address,
        body.dob,
        body.password 

      ];
    
   await new userModal({
       full_name:fullName,
       dob:dob,
       email:email,
       address:address,
       password:password
   }).save().then((data)=>{
      res.status(201).json({status:true,result:data,msg:"Inserted Successfully"})
   }).catch(err=>{
       res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
   }) 
})

app.get('/users',async (req,res)=>{
    await userModal.find().then(data=>{
        res.status(200).json({status:true,result:data,msg:"Getting Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
})
app.put('/user/:id',async (req,res)=>{
    const body   = {...req.body}; 
    const userId = req.params.id; 
    const [
        
        fullName, 
        email,
        address,
        dob,
        password
      ] = [
        body.fullName, 
        body.email,
        body.address,
        body.dob, 
        body.password
      ];
    await userModal.findByIdAndUpdate(userId,{
     $set:{
        full_name:fullName,
        dob:dob,
        email:email,
        address:address,
        password:password
     }
    }).then(data=>{
        res.status(200).json({status:true,result:data,msg:"Updated Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
})

app.delete('/user/:id',async (req,res)=>{
   
    const userId = req.params.id; 
   
    await userModal.findByIdAndDelete(userId).then(data=>{
        res.status(200).json({status:true,result:data,msg:"Deleted Successfully"})
    }).catch(err=>{
        res.status(500).json({status:false,result:err,msg:"Internal Server Error"})
    }) 
})

app.listen(port,()=>{console.log(`port listening on ${port}`)})