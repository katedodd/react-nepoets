import React from 'react';
import './App.css';
import Adopt from './pages/adopt';
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  setData() {
    //set data with local storage
    localStorage.setItem('myData', true);
  }

  getData() {
    let data = localStorage.getItem('myData');
    console.log(data);
  }

  render() {
    return (
      <Router>
              <Navbar/>
              <Switch>
                {/* <Route path="/" exact component={Landing}/> */}
                <Route path="/adopt" component={Adopt}/>
                <Route path="/home" component={Home}/>
            </Switch>
            {/* <button onClick={ () => this.setData() }>Set Data</button>
            <button onClick={ () => this.getData() }>Get Data</button> */}
      </Router>
    );
  }
}

export default App;
