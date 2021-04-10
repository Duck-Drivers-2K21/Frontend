import logo from './img.png';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/feed">
                        <p>t</p>
                    </Route>

                    <Route path="/">
                        <div className="homepage-container">
                            <div>
                                <img src={logo} className="homepage-logo" alt="logo"/>
                                <Link to="/feed">START</Link>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
