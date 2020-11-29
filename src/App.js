import React from 'react';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
            <Navbar/>
            <Switch>
              {/* <Route path="/" exact component={Landing}/> */}
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>
          </Switch>
    </Router>
  );
}

export default App;
