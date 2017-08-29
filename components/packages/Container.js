import React, {Component} from 'react';
import Package from "./Package";
import Calculator from './Calculator';

export default class Container extends Component {
    render(){
        const { pages, vipcoinCost, bitcoinCost, packages } = this.props;

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
                <Package package_title={ pages.packages[0]} packages={ packages }/>
                <Calculator
                    calculate_title={ pages.packages[1]}
                    // packages={ pages.packages[0]}
                    packages={ packages }
                />
            </div>
        )
    }
}
