const express = require('express');
const { arrayBuffer } = require('stream/consumers');
const abc = require('../introduction/intro')
const router = express.Router();



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
});

router.get('/movies', function (req, res){                 //Done by me
    console.log("These are movies : ", req.params)                                  
    let movies = ['Rang de basanti','The shining','Lord of the rings', 'Batman begins'] 
    res.send(movies)
});

router.get('/movies/:indexNumber',function(req, res){
    let movies = ['Rang de basanti','The shining','Lord of the rings', 'Batman begins']
    let indexNumber = req.params.indexNumber
    if(indexNumber>movies.length||indexNumber<0){
        res.send("please give me valid index number")
    } 
    res.send(movies[indexNumber])
})

router.get('/films',function(req, res){
  let films =  [{
        "id" : 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(films)
    })    

router.get('/films/:filmId',function(req, res){
    let films =  [{
        "id" : 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
      
        
      

git 
    let b =req.params.filmId
    let c =films[b-1]
    if(films.length>=b){
        res.send(c)
     }else{
        res.send("NO movie exist with this Id")
    }
   
})

// //const id =3    //req.params

// const movie =moviesArray.find(film => film.id==id)

// if(movie){
//     res.send(movie)
// }else{
//     res.send("no movies exist with this id")
// }






// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;