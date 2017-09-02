import React, {Component} from 'react';

export default class Progress extends Component {

    render(){
        const { pages, maxCoins, soldCoins } = this.props;

        let coinsLeft = ((maxCoins*30)/100)-soldCoins;
            if(coinsLeft <= 0 ){
                coinsLeft = "FINISH";
            };
        const width = ((soldCoins*100)/maxCoins).toFixed(1);
        return (
            <div className="progress">
                <h1> {pages.head}</h1>
                <h2> {pages.title}</h2>
                <div className="coins_left">{ coinsLeft } <i className="icon-bitcoin-circle"/></div>
                <progress className="progressBar" value={ soldCoins } max={ maxCoins }/>
                <div className="afterProgress">
                    <span className="left" style={{left: `${width}%`}}>{soldCoins}</span>
                    <span className="right">{maxCoins}</span>
                </div>
            </div>
        );
    }
}
