import React from 'react';
import Rounds from './data/rounds';

const NextGP = () => {

    const list = [...Rounds.rounds];
    const count = list.map(round => {
        const dateNow = new Date();
        const compareDate = new Date(2020,round.date_month-1,round.date_day+1);
        const diff = compareDate.getTime() - dateNow.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return days
    });

    const theNearestTour = element => element >= 0;
    const firstIndex = count.findIndex(theNearestTour);
    const days = count.find(theNearestTour);    

    return (  
        <header className="GP_title">
            <h1 className="text">Najbliższe zawody:</h1>
            <p className="text__content">{list[firstIndex].city} - {list[firstIndex].date}</p>
            <p className="text__content">{days === 0 ? "Dzisiaj" : `za : ${days} dni`}</p>
        </header>
    );
}
 
export default NextGP;