import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FontAwesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pagess/Home";
import About from "./components/pagess/About";
import Login from "./components/login/Login";
import Reducers from "./components/pagess/Reducers";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/Store"
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewItemContainer from "./components/NewItemContainer";
import UserContainer from "./components/UserContainer";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Home /> */}
      {/* <About />   */}    
      {/* <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer /> */}
        {/* <HooksIceCreamContainer />
        <NewItemContainer />
        <NewItemContainer cake /> */}
        <UserContainer />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router> */}
    </div>
    </Provider>
  );
}

export default App;
