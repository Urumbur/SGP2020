import React, { Component } from 'react';
import TopBar from './TopBar';
import HomeScreen from './HomeScreen'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextGP: function() {
        const date1 = new Date();
        const date2 = new Date(2019,5,18);
        const diff = date2.getTime() - date1.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return days;
      },
      placeGP: 'Warsaw',
      dateGP: '18.05.2018'
      }
  }  

  render() {
    return (
      <div className="wrapper">
        <TopBar/>
        <HomeScreen nextGP={this.state.nextGP()} placeGP={this.state.placeGP} dateGP={this.state.dateGP}/>
      </div>
    );
  }
}

export default App;
