import React, { Component } from 'react';
import Rounds from './data/rounds';
import { getFlag } from './getFlag';
import StartList from './StartList'

class Gp extends Component {
    getGP() {
        const pageId = this.props.match.params.parametr;
        const list = [...Rounds.rounds];
        const obj = [];
        for (let i in list) { 
            if(`${list[i].id}-${list[i].city}` === pageId) {
                obj.push(list[i]);
            }
        }
        return obj;
    }

    renderGP(obj) {
        const render = obj.map((round,id) => {
            let flag = getFlag(round.country);
            return (
                <div className="competition">
                    <div key={id} className="gp">
                        <span className="round__flag round__flag--mod"><img src={flag} alt=""/>{round.city}</span>                    
                    </div> 
                    <div className="tournament_table">
                        <p className="table__head">
                            <span>Nr</span>
                            <span>ZAWODNIK</span>   
                            <span>BIEGI</span>                         
                            <span className="pkt">SUMA</span>
                        </p>
                        <StartList />
                    </div>
                </div>                                   
            )
        })
        return render
    }

    render() { 
        return(              
            this.renderGP(this.getGP())
        )
    }
}

export default Gp;