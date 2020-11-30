import React from 'react';
import './App.css';
import Adopt from './pages/adopt';
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
            <Navbar/>
            <Switch>
              {/* <Route path="/" exact component={Landing}/> */}
              <Route path="/adopt" component={Adopt}/>
              <Route path="/home" component={Home}/>
          </Switch>
    </Router>
  );
}

export default App;
