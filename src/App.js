import "./animaciones.css";
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Game from "./pages/Game/Game";
import Results from "./pages/Results/Results";
import Main from "./pages/Main";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
            <Route path="/results">
            <div className="bg-dark h-100 mh-100 main text-dark">

                <Results></Results>
              </div>
            </Route>
            <Route path="/game">
            <div className="bg-dark h-100 mh-100 main text-white urlBackground">
            <Game></Game>
            </div>
            </Route>
            <Route path="/">
              <div className="bg-dark h-100 mh-100 main text-white">
                <Main></Main>
              </div>
            </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
