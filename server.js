var express=require('express');
var server=express();
var routes=require('./routes/route')
var mongoose=require('mongoose');
const cors=require('cors');
server.use(cors());
server.use(express.json());

server.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://employee:employee@cluster1.xqb3lal.mongodb.net/",(error)=>{
    if(error){
        console.log("Error");
      }else{
        console.log("DB Connected !!!");
      }
})


server.listen(3000,function CheckConnection(error){
  if(error){
    console.log("Error");
  }else{
    console.log("Connected !!!");
  }
})


