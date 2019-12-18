import React, { Component } from 'react';
import Table from './Table';
import Schedule from './Schedule';
import NextGP from './NextGP';

class HomeScreen extends Component {
    render() {        
        return (
            <div className="mainPage">
                <div className="nextGP">
                    <NextGP />
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