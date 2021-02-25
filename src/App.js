import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Nav} from './components';
import {About, Home} from './views';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='text-center p-6 bg-black text-white'>
            Kitiri Frontend
          </h1>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
