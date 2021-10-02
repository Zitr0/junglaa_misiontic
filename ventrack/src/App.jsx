import RegistroVentas from './pages/RegistroVentas';
import SisVenta from './pages/SistemaVentas';
import TablaGv from './pages/TablaGV';
import './styles/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/RegistroVentas'>
            <RegistroVentas/>
          </Route>
          <Route path='/TablaGV'>
            <TablaGv/>
          </Route>
          <Route path='/'>
            <SisVenta/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
