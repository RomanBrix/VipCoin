import React, {Component} from 'react';
import Top from './Top';
import GMap from "./GMap";

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top top={ pages.top } />
                <GMap feedback={ pages.feedback}/>
            </div>
        )
    }
}
