//import './styles/styles.css';
import Index from 'pages';
import Login from 'pages/login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GeneralLayout from "layouts/GeneralLayout";
import RegistroProducto from 'pages/registroProducto';
import ListaProducto from "pages/listaProductos";
import 'styles/styles.css';

function App() {
  return (
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
  );
}

export default App;
