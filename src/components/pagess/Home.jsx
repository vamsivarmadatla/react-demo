import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyStyle.css"

const Home = () => {
  const[users, setUsers] = useState([]);

 const usersData = async () =>{
   const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
   setUsers(result.data)
   console.log(result)
  }

useEffect(()=>{
  usersData();
}, [])

// useEffect( async ()=>{
//   const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//   setUsers(result.data)
//   console.log(result)
// }, [])

 
  return (
    <>
      <div>
        {
          users.map((useData, index) =>( <h2 key={useData.id}>{index} {useData.name}</h2>))
        }

            
    
      </div>
    </>
  );
};

export default Home;
