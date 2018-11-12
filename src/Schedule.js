import React, { Component } from 'react';
import './style.css';
import Rounds from './data/rounds';
import {getFlag} from './getFlag';

class Schedule extends Component {
    RenderScheduleList() {
        const list = [...Rounds.rounds];
        const obj = list.map((round, id) => { 
            let flag = getFlag(round.country);
                return (
                    <div key={id}>
                        <p className="table__render">
                            <span>{round.id}</span>
                            <span className="round__flag"><img src={flag} alt=""/>{round.city}</span>
                            <span>{round.date}</span>
                        </p>
                    </div>
                )
            });
            
        return obj;
    }

    render() {
        return (
            <div className="table calendar">
                <h1 className="table__header">Terminarz</h1>
                {this.RenderScheduleList()}
            </div>
        );
    }
}
export default Schedule;