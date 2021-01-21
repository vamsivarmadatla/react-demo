import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FontAwesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pagess/Home";
import About from "./components/pagess/About";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
