import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Home, About } from './views'


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className="text-center p-6 bg-black text-white">Kitiri Frontend</h1>
        <div className="flex justify-around text-blue py-6">
          <Link className="cursor-pointer" to="/">Home</Link>
          <Link className="cursor-pointer" to="/about">About</Link>
        </div>
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
