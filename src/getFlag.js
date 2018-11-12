import Poland from '../src/img/Poland.png';
import Australia from '../src/img/Australia.png';
import Czech from '../src/img/Czech.png';
import Denmark from '../src/img/Denmark.png';
import Germany from '../src/img/Germany.png';
import Great_Britain from '../src/img/Great Britain.png';
import Russia from '../src/img/Russia.png';
import Slovakia from '../src/img/Slovakia.png';
import Slovenia from '../src/img/Slovenia.png';
import Sweden from '../src/img/Sweden.png';
import Usa from '../src/img/USA.png';

export const getFlag = country => {
    switch(country) {
        case "Poland": return Poland
        case "Australia": return Australia
        case "Czech": return Czech
        case "Denmark": return Denmark
        case "Germany": return Germany
        case "Great Britain": return Great_Britain
        case "Russia": return Russia
        case "Slovakia": return Slovakia
        case "Slovenia": return Slovenia
        case "Sweden": return Sweden
        case "USA": return Usa

        default: return null;
    }
}