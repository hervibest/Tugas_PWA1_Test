import express, { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
let users = []
const router = express.Router();
//all routes in here are starting with /users
/*
FUNGSI READ 
*/
router.get('/',(req,res) => {
    console.log(users);

    res.send(users);
});


/*FUNGSI CREATE
*/
router.post('/',(req,res) => {
    
    const user = req.body;

    users.push({...user,id:uuidv4()});

    res.send(`User with the username : ${user.firstName} added to the database!`);

});
//mengirimkan data dari frontend ke server
//seperti data dari login form

// /users/2 => req.params {id:2}
//Mengambil Objek User dari ID & mengecek kondisi apakah ID ada
router.get('/:id', (req,res)=>
{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id === id);

    res.send(foundUser);

});

//fungsi DELETE
router.delete('/:id', (req,res) =>{
const{id} = req.params;

users = users.filter((user) => user.id !== id);
res.send(`User with the id ${id} deleted from the database. `)

});
//Update Method
router.patch('/:id', (req,res) =>{

    const{id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=> user.id === id);
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if( age){
        user. age =  age;
    }
    
    res.send(`User with the id ${id} has been updated.`)


})
export default router;