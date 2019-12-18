import React from 'react';
import TopBar from './TopBar';
import HomeScreen from './HomeScreen';
import './style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Gp from './Gp';

const App = () => {

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
 
export default App;