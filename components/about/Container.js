import React, {Component} from 'react';
import Top from './Top';
import Pluses from './Pluses';
import Team from "./Team";


export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top pages={pages.top}/>
                <Pluses pages={pages.pluses}/>
                <Team pages={pages.team}/>
            </div>
        )
    }
}
