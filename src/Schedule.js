import React, { useState } from 'react'
import Rounds from './data/rounds';
import { getFlag } from './getFlag';
import { Link } from 'react-router-dom';

const Schedule = () => {

    const [state, toggleClick] = useState({
        click: false,
        roundId: 0
    });

    const list = [...Rounds.rounds];
    const obj = list.map((round, id) => { 
        let flag = getFlag(round.country);
        return (
            <div key={id} onClick={() => toggleClick({click: !state.click, roundId: round.id-1})} >
                <p className={`table__render ${state.roundId === id && state.click ? "goin" : ""}`}>
                    <span className="index">{round.id}</span>
                    <span className="round__flag"><img src={flag} alt=""/>{round.city}</span>                            
                    <span>
                        {state.roundId === id && state.click ? 
                        <Link to={`/Gp/${round.id}-${round.city}`}><button className="btn">Szczegóły</button></Link> : `${round.date}`}
                    </span>
                </p>
            </div>                    
        )
    });

    return (
        <div className="table calendar">
            <h1 className="table__header">Terminarz</h1>
            {obj}                  
        </div>
    );
}
 
export default Schedule;