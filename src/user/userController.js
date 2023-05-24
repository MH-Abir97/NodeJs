
var userService=require('./userService');

var getAllDataControlllerfn=async (req,res)=>{
    var employee=await userService.getAllUserDBService();
    res.send({"status":true,"data":employee});
}

var createControlllerfn=async (req,res)=>{
    var status=await userService.createUserDBService(req.body);
    if(status){
        res.send({"status":true,"Message":"Data Successfully !!!"})
    }else{
        res.send({"status":true,"Message":"Error !!!"})
    }
}

var updateControlllerfn = async (req,res)=>{

    var result=await userService.updateUserDBService(req.params.id,req.body);
    if(result){
        res.send({"status":true,"Message":"Update Successfully !!!"})
    }else{
        res.send({"status":true,"Message":"Error !!!"})
    }
}


var deleteControlllerfn = async (req,res)=>{

    var result=await userService.deleteUserDBService(req.params.id);
    if(result){
        res.send({"status":true,"Message":"Delete Successfully !!!"})
    }else{
        res.send({"status":true,"Message":"Error !!!"})
    }
}

module.exports={getAllDataControlllerfn,createControlllerfn,updateControlllerfn,deleteControlllerfn}