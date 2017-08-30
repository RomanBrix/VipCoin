import React, {Component} from 'react';

export default class CoinsInfo extends Component {
    render(){
        const { user } = this.props;
        let {status, coinsHave } = ["",""];
        user.map((item)=>{
            status = item.status;
            coinsHave = item.vipcoins_value;
        });
        return(
            <div className="coins-info">
                <div className="status">
                    { status }
                </div>
                <div className="coinsHave">
                    <i className="icon-bitcoin-circle"/>
                    {coinsHave}
                </div>
                <div className="profit">
                    <i className="icon-usd"/>
                    {(coinsHave * 0.15).toFixed(2)}
                </div>
            </div>
        )
    }
}
