import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [emp, setedata] = useState({});

  useEffect((res) => {
    fetch('http://localhost:2020/show')
      .then(response => response.json())    // one extra step
      .then(data => {
        console.log(data);
        setedata(data);
      })
      .catch(error => console.error(error));
  }, [])


  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1>
      {emp && emp.length > 0 && emp.map((userObj) => (
        <li >{userObj.actor_id} {userObj.first_name} {userObj.last_name} </li>
        
      ))}
    </div>
  )
}


export default App;
