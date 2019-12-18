import React, { Component } from 'react';
import TopBar from './TopBar';
import HomeScreen from './HomeScreen';
import './style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Gp from './Gp';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="wrapper">
            <TopBar/>
            <Route exact path="/" component={HomeScreen}/> 
            <Route path="/Gp/:parametr" component={Gp} />
          </div>
        </Router>
    );
  }
}

export default App;
