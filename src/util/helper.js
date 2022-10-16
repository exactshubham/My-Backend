let abc = function(){  
     const currentdate = new Date();
     let d = currentdate.getDate();
     let m = currentdate.getMonth() + 1;       //get month in this starts from 0 ( that is 0 to 11) //for this we taken + 1 to get current month
     let y = currentdate.getFullYear();
     
     return ("currentdate is " + " " + [d, m, y] )
} 

function getBatchInfo(){
     return 'Lithium, W3D3, the topic for today is Nodejs module system'
 }
 
 module.exports.getBatchInfo=getBatchInfo
module.exports.Currentdate = abc
