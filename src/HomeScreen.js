import React from 'react';
import Table from './Table';
import Schedule from './Schedule';
import NextGP from './NextGP';

const HomeScreen = () => {
    
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
 
export default HomeScreen;