import logo from 'logo.svg';
import 'styles/styles.css';
import { useAuth0 } from "@auth0/auth0-react";

function Index(){

const { loginWithRedirect } = useAuth0();
   return <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />               
                 
                        <button onClick={() => loginWithRedirect()}
                                type="button" 
                                className="align-content:center bg-indigo-500 text-white rounded border p-2 hover:bg-blue-400" 
                                value="Acceso" >
                                Ingreso Plataforma Ventrack
                        </button>
                   
                </header>
            </div>
}

export default Index;

/*
import {Link} from 'react-router-dom';
  <Link to ='/Login'>
                        <button type="button" 
                                className="align-content:center bg-indigo-500 text-white rounded border p-2 hover:bg-blue-400" 
                                value="Acceso" onClick={() => loginWithRedirect()}>
                                Ingreso Plataforma Ventrack
                        </button>
                    </Link>
*/