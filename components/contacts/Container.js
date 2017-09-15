import React, {Component} from 'react';
import Top from './Top';
import GMap from "./GMap";
import FeedBack from './FeedBack';

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <div className="left">
                    <GMap feedback={ pages.feedback } top={ pages.top }/>
                    <Top  top={ pages.top }/>
                </div>
                <div className="right">
                    <FeedBack feedback={ pages.feedback }/>

                </div>
            </div>
        )
    }
}
