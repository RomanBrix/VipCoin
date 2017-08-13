import React, {Component} from 'react';
import Top from './Top';
import Progress from './Progress';

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top pages={ pages.top }/>
                <Progress pages={ pages.progress }/>
            </div>
        )
    }
}
