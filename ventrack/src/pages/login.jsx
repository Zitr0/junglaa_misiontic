import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ()=> {
const { loginWithRedirect } = useAuth0();

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
              <button type="button" className="bg-indigo-500 
              text-white rounded border  p-2 hover:bg-blue-400"
              onClick={() => loginWithRedirect()}>Ingresar</button>
            </form> 
      </div>
    </>
    );
  }

export default Login;

/*
import {Link} from 'react-router-dom';
 <Link to ='/listaProductos'>
              <button type="button" className="bg-indigo-500 
              text-white rounded border  p-2 hover:bg-blue-400"
              onClick={() => loginWithRedirect()}>Ingresar</button>
  </Link>
*/ 