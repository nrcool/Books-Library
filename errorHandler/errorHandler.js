

function errorController(err, req, res, next) {
  res.send({status:err.status||500,message:err.message})
  };
  
module.exports={errorController}
