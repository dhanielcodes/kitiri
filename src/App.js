import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About } from './views'
import { Nav } from './components';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className="text-center p-6 bg-black text-white">Kitiri Frontend</h1>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
