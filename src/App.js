import logo from './img.png';
import './App.css';
import { Feed } from './Feed'

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
                        <Feed/>
                    </Route>

                    <Route path="/">
                        <div className="homepage-container">
                                <img src={logo} className="homepage-logo" alt="logo"/>
                                <Link className="feed-link" to="/feed">START</Link>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
