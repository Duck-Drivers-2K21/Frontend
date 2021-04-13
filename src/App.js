import logo from './res/img/duck_driver.png';
import './App.css';
import {Feed} from './Feed'
import {About} from './about'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
    let githubLink = "https://github.com/Duck-Drivers-2k21";
    return (
        <Router basename="/">
            <div className="App">
                <Switch>
                    <Route path="/feed">
                        <Feed/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <div className="homepage-container">
                            <img src={logo} className="homepage-logo" alt="logo"/>
                            <p>Waddle about campus</p>
                            <div className="button">
                                <Link to="/feed">Let's get rollin'</Link>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
            <div id="footer">&#60;<Link to="/about">about</Link>; made with ❤ for <b>Bath Hack 2021</b>; source on <a
                href={githubLink}>GitHub</a>;&#62;</div>
        </Router>
    );
}

export default App;
