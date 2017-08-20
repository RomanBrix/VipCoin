import React, {Component} from 'react';
import Package from "./Package";
import Calculate from './Calculate';

export default class Container extends Component {
    render(){
        const { pages, vipcoinCost, bitcoinCost } = this.props;

        return(
            <div className="content">
                <div className="currency">
                    <div className="currency-vipcoin">
                        1
                        <i className="icon-bitcoin-circle"/>
                        <i className="icon-arrow-swap"/>
                        <i className="icon-usd"/>
                        {vipcoinCost}
                    </div>
                    <div className="currency-bitcoin">
                        1
                        <i className="icon-bitcoin-circle"/>
                        <i className="icon-arrow-swap"/>
                        <i className="icon-usd"/>
                        {bitcoinCost}

                    </div>
                </div>
                <Package packages={ pages.packages}/>
                <Calculate calculate={ pages.packages[2]}/>
            </div>
        )
    }
}
