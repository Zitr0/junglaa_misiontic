import logo from 'logo.svg';
import 'styles/styles.css';
import {Link} from 'react-router-dom';

function Index(){
   return <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                                      
                    <Link to ='/Login'>
                        <button type="button">
                                    Login
                        </button>
                    </Link>
             
                </header>
            </div>
}

export default Index;