import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Create = () => {   
    const [name , setName]=useState("");
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const navigate =useNavigate();
    // const header={ "Access-Control-Allow-Origin=":"*"}


    const handleClick =(e)=>{
        e.preventDefault();
       axios.post("https://66858cb0b3f57b06dd4d20d8.mockapi.io/crud-operate",{
         name : name,
         email : email,
         password : password,
        //  header,
       })
        .then(()=>{
          navigate("/Read");
        });
     
    };

  return (
    <>
    <div>
    <h2>Create Page</h2>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputname1" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    onChange={(e)=>setName(e.target.value.name)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputemail1" className="form-label">Email adress</label>
    <input type="email" 
    className="form-control"
    onChange={(e)=>setEmail (e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputpassword1" className="form-label">password</label>
    <input type="password" 
    className="form-control" 
    onChange={(e)=>setPassword (e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div>
    </>
  )
}

export default Create;
