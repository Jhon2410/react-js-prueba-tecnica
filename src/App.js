import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
function App({ estado }) {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path="/">
            <div className="">
            main
            </div>
          </Route>

          <Route path="/game">
            <div>juego</div>
          </Route>

          <Route path="/results">
            <div>resultados : </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
