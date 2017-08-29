import React, {Component} from 'react';
import CoinsInfo from './CoinsInfo';
import Refill from './Refill';

export default class Container extends Component {
    render(){
        const { packages, user } = this.props;
        return(
            <div className="content">
                <CoinsInfo user={ user }/>
                <Refill packages={ packages }/>
            </div>
        )
    }
}
