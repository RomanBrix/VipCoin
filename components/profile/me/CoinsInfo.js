import React, {Component} from 'react';

export default class CoinsInfo extends Component {
    render(){
        return(
            <div className="coins-info">
                <div className="coinsHave">
                    <i className="icon-bitcoin-circle"/>
                    1234
                </div>
                <div className="profit">
                    <i className="icon-usd"/>
                    432324
                </div>
            </div>
        )
    }
}
