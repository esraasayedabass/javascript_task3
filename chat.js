'use strict';

 

document.querySelector('#joinGroup').addEventListener('click', ()=>{

    console.log("join group");

    document.querySelector('#form-login').classList.add('d-none');

    document.querySelector('#chatList').classList.remove('d-none');

});

 

document.querySelector('#sendMessage').addEventListener('click', ()=>{

    console.log("send message");

});