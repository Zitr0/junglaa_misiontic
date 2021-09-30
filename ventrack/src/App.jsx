import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegistroProducto from './pages/registroProducto';
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
        {/* Aquí van todas los links para renderizar */}
        <Router>
          <Switch>
            <Route path='/registroProducto'>
              <RegistroProducto />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
