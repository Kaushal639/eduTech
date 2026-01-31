import React from 'react';
import {UseState} from 'react'


const  Userdata=[
  {
    "email": "alice@example.com",
    "password": "passward123",
    
  },
  {
    "email": "bob@example.com",
    "password": "passward123"
  },
  {
    "email": "charlie@example.com",
    "password": "passward123"
  },
  {
    "email": "diana@example.com",
    "password": "passward123"
    
  },
  {
    "email": "edward@example.com",
    "password": "passward123",}
    
]

 export const LocalStorage=()=> {

    localStorage.setItem('users', JSON.stringify(Userdata))
};
export const GetData=()=>{
  const data = JSON.parse(localStorage.getItem('users'));
  console.log(data);
}