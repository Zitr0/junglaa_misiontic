import React, { Component, useRef } from 'react'

const Login = ()=> {

  const handleClickEvent = () => {
     const name = document.getElementById("name").value;
     const pass = document.getElementById("pass").value;
     alert("Usuario:" + name + " " + "Contraseña:" + pass)
  }
  return (  
    <>
      <div className='card'>
     
        <form action="" className='borderAcceso'>
              <label>Usuario: </label>
              <input type="text" id="name"/>
              <br />
              <label>Contraseña: </label>
              <input type="password" id="pass"/>
              <br />
              <input type="submit" value="Ingresar" onClick={handleClickEvent}></input>
            </form> 
      </div>
    </>
    );
  }

export default Login;
