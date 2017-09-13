import React, {Component} from 'react';
import Top from './Top';
import Pluses from './Pluses';


export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top />
                <Pluses/>
            </div>
        )
    }
}
