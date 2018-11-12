import React, { Component } from 'react';
import Table from './Table';
import Schedule from './Schedule';
import './style.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className="mainPage">
                <div className="nextGP">
                    <header className="GP_title">
                        <h1 className="text">Najbliższe zawody:</h1>
                        <p className="text__content">{this.props.placeGP} - {this.props.dateGP}</p>
                        <p className="text__content">za : {this.props.nextGP} dni</p>
                    </header>
                </div>
                <main>
                    <Table />
                    <Schedule />
                </main>
            </div>
        );
    }
}

export default HomeScreen;