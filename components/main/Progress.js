import React, {Component} from 'react';

export default class Progress extends Component {
    constructor(props){
        super(props);
        this.state = {
            coinsLeft: 500000,
            maxCoins: 1000000,
            soldCoins: 539999
        }
    }
    render(){
        const { pages } = this.props;
        const { coinsLeft, maxCoins, soldCoins } = this.state;
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
