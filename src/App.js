import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Bunnies from './Views/Bunnies';
import Main from './Views/Main';
import Todos from './Views/Todos';
import Workshops from './Views/Workshops';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path={'/workshops'}>
              <Workshops />
            </Route>
            <Route path={'/bunnies'}>
              <Bunnies />
            </Route>
            <Route path={'/todos'}>
              <Todos />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
