var userModel=require('./userModel');

module.exports.getAllUserDBService=()=>{
    return new Promise (function myFunc(resolve,reject){
      userModel.find({},function CheckFunc(error,result) {
         if(error){
           reject(false);
         }else{
            resolve(result);
         }
      })
    }) 
}




module.exports.createUserDBService=(userDetails)=>{

    return new Promise(function CheckUrl(resolve,reject){
        var userModelData=new userModel();
        userModelData.name=userDetails.name;
        userModelData.phone=userDetails.phone;
        userModelData.email=userDetails.email;
        userModelData.save(function resultHandle(error,result){
         if(error){
          reject(false)
         }else{
            resolve(result);
         }
        })
    })
}


module.exports.updateUserDBService = (id,userDetails)=>{

     console.log(userDetails);
   
    return new Promise (function myFunc(resolve,reject){
        userModel.findByIdAndUpdate(id,userDetails,function CheckFunc(error,result) {
           if(error){
             reject(false);
           }else{
              resolve(result);
           }
        })
      });
}


module.exports.deleteUserDBService = (id)=>{

   return new Promise (function myFunc(resolve,reject){
       userModel.findByIdAndDelete(id,function CheckFunc(error,result) {
          if(error){
            reject(false);
          }else{
             resolve(result);
          }
       })
     });
}