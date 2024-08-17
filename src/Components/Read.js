import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Read = () => {
 
  const [data,setData]=useState([]);
  const [error , setError]=useState(null);

  function getData() {
     axios.get("https://66858cb0b3f57b06dd4d20d8.mockapi.io/crud-operate")
     .then((response) => {
      // console.log(response.data)
      setData(response.data);
  })
    .catch((error) => {
      setError(error);
    });
  }
   function handleDelete(id){
    axios.delete(`https://66858cb0b3f57b06dd4d20d8.mockapi.io/crud-operate/${id}`)
   .then(()=>{
     getData();
   })
  }
  function setToLocalStorage(id,name,email,password){
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
  }
   useEffect(()=>{
    getData();
  },[]);

  


return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  {
    data.map((eachdata)=>{
      return(
        <>
           <tbody>
    <tr>
      <th scope="row">{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <td>{eachdata.password}</td>
      <td>
        <Link to="/Update">
        <button type="button" 
        className="btn btn-success" 
        onClick={()=>
          setToLocalStorage(
            eachdata.id,
            eachdata.name,
            eachdata.email,
            eachdata.password
          )}
        >
          Edit
        </button>
        </Link>
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(eachdata.id)}>Delete</button>
      </td>
    </tr>
  </tbody>
        </>
      )
    })
 }
</table>
    </>
  )
}

export default Read

