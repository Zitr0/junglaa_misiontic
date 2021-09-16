
import logo from './logo.svg';
import './App.css';
import FormDialog from './login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code>
          Control y Seguimiento Ventas
        </p>
        <a
          className="App-link"
          href= {FormDialog}
          target="_blank"
          rel="noopener noreferrer"
        >
          VENTRACK
        </a>
      </header>
    </div>
  );
}


export default App;
