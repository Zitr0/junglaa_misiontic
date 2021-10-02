import {Link} from 'react-router-dom';

const Login = ()=> {

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
              <Link to ='/listaProductos'>
              <button type="button" className="bg-indigo-500 
              text-white rounded border  p-2 hover:bg-blue-400">Ingresar</button>
              </Link>
            </form> 
      </div>
    </>
    );
  }

export default Login;
