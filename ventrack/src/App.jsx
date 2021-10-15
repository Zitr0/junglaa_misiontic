import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GeneralLayout from "layouts/GeneralLayout";
import Productos from 'pages/Productos';
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
        {/* Aquí van todas los links para renderizar */}
        <Router>
          <GeneralLayout>
          <Switch>
            <Route path='/productos'>
              <Productos />
            </Route>
          </Switch>
          </GeneralLayout>
        </Router>
    </div>
  );
}

export default App;
