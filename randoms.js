import { user } from "./user.js";

let text=document.getElementById("fulname")
let myName=document.getElementById("namee")
let myImage=document.getElementById("imge")
let randomUser=document.getElementById("btnrandom");

let myUser=document.getElementById("user")
let myAge=document.getElementById("age")
let mySite=document.getElementById("email")
let myAdress=document.getElementById("adress")
let myPassword=document.getElementById("password")
let myPhoneN= document.getElementById("phone");

let infoUser=0;
window.addEventListener("load" ,()=>{
    let users= user[infoUser];
    text.innerHTML="My name is";
    myName.innerHTML=users.name;
    myImage.src=users.img;
})
   function randomU(){
        return Math.floor(Math.random()*user.length);
        
    }
    randomUser.addEventListener("click",()=>{
        infoUser=randomU();
        let users= user[infoUser];
        myName.innerHTML=users.name;
        myImage.src=users.img;
        console.log(infoUser);
       
    })
    myUser.addEventListener("click",()=>{
        let users=user[infoUser]
        // text.innerHTML="my name is"
        myName.innerHTML=users.name;
    })
    myAge.addEventListener("click",()=>{
        let users=user[infoUser];
        text.innerHTML="my age is"
        myName.innerHTML=users.age;
    })
    myAdress.addEventListener("click",()=>{
        let users=user[infoUser];
        text.innerHTML="my Address is"
        myName.innerHTML=users.adress;
    })
    myPassword.addEventListener("click",()=>{
        let users=user[infoUser];
        text.innerHTML="my passwprd is"
        myName.innerHTML=users.password;
    }) 
    myPhoneN.addEventListener("click",()=>{
        let users=user[infoUser];
        text.innerHTML="my phone number is"
        myName.innerHTML=users.phone;
    })   
    mySite.addEventListener("click",()=>{
        let users=user[infoUser];
        text.innerHTML="my website is"
        myName.innerHTML=users.website;
    })

    




