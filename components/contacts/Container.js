import React, {Component} from 'react';
import FeedBack from './FeedBack';
import Top from './Top';

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top top={ pages.top } />
                <FeedBack/>
            </div>
        )
    }
}
