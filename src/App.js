import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import GIFLibrary from './GIFLibrary';
import Navigate from './Navigate';
import MemeGenerator from './MemeGenerator';


function App() {

  return (
    <Router>
     
        <header >
        <Navigate className="App-header"/>
        </header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/giflib">
                <GIFLibrary />
              </Route>
              <Route exact path="/memegenerator">
                <MemeGenerator />
              </Route>
            </Switch>
     
    </Router>
  );
}

export default App;
