import React from 'react';
import Riders from './data/riders';
import {getFlag} from './getFlag';

const Table = () => {

    const list = [...Riders.riders];
    list.sort((a,b) =>  b.points - a.points);
    const obj = list.map((rider, id) => { 
        let flag = getFlag(rider.country);
        return (
            <div key={id}>
                <p className="table__render">
                    <span className="index">{++id}</span>
                    <span className="round__flag"><img src={flag} alt=""/>{rider.name}&nbsp;<em>#{rider.number}</em></span>
                    <span className="pkt">{rider.points}</span>
                </p>
            </div> 
        )
    });

    return ( 
        <div className="table riders">
            <h1 className="table__header">Tabela Mistrzostw Świata</h1>
            <p className="table__head">
                <span className="poz">POZ</span>
                <span className="rider">ZAWODNIK</span>
                <span className="pkt">PKT</span>
            </p>
            {obj}
        </div>
    );
}
 
export default Table;