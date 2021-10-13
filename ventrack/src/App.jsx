//import './styles/styles.css';
import Index from 'pages';
import Login from 'pages/login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GeneralLayout from "layouts/GeneralLayout";
import RegistroProducto from 'pages/registroProducto';
import ListaProducto from "pages/listaProductos";
import 'styles/styles.css';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
        domain="misiontic-ventrack.us.auth0.com"
        clientId="CEQSisbcrioU2kpQlCs00D94LmXp6CP1"
        redirectUri="http://localhost:3000/listaProductos"
    >

      <div className="App">
          {/* Aquí van todas los links para renderizar */}
          <Router>
            <GeneralLayout>
            <Switch>
              <Route path='/registroProducto'>
                <RegistroProducto />
              </Route>
              <Route path='/listaProductos'>
                <ListaProducto />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
            </GeneralLayout>
          </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;

/*

   redirectUri={window.location.origin}

*/

