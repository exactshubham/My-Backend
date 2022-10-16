 let allthree =  function(){
      let a = "FunctionUp        ";
      let Trim = a.trim();
      let LowerCase = Trim.toLowerCase();
      let UpperCase = LowerCase.toUpperCase();

      return {Trim, LowerCase, UpperCase}
       
 }
   let lodash= require('lodash')
   let lodash2= function(){
   let arr=["January","February","March","April","May","June","July","August","September","October","November","December"]
   let chunks= lodash.chunk(arr, 3)

   let arr2= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
   let tail= lodash.tail(arr2)

   let arr3= [[1,2,3],[2,3,4],[4,5,6],[6,7,8],[7,8,9]]
   let union= lodash.union(...arr3)

   let objects= [["horror","The Shining"],["drama","Titanic"], ["thriller","Shutter Island"],["fantasy","Pans Labryinth"]]
   let fromPairs= lodash.fromPairs(objects)

   return {chunks, tail, union, fromPairs }
 }

  

 module.exports.publicthree = allthree
 module.exports.lodashpackage = lodash2
 