import React, {Component} from 'react';

export default class Calculate extends Component {
    constructor(props){
        super(props);
        this.state = {
            coinPrice: 0.1,
            valOfRange: 1,
        }
    }
    calc(){
        const {give, get, profit, rangeYear} = this.refs;
        const { coinPrice } = this.state;
        let futureCoinPrice = 10;
        switch (+rangeYear.value){
            case 1:
                futureCoinPrice = 9;
                break;
            case 2:
                futureCoinPrice = 49;
                break;
            case 3:
                futureCoinPrice = 99;
                break;
            case 4:
                futureCoinPrice = 149;
                break;
            case 5:
                futureCoinPrice = 201;
                break;

        }
         const giveDoll = give.value;

        if (giveDoll > 0) {
            const getAnsw = give.value / coinPrice;
            const profitAnsw = getAnsw * futureCoinPrice;

            get.value = getAnsw;
            profit.value = profitAnsw;


        }
        this.setState({
            valOfRange: +rangeYear.value,
        })


    }
    render(){
        const { calculate } = this.props;
        const { valOfRange} = this.state;
        return(
            <div className="calculate-container">
                <h1>{calculate.title}</h1>
                <p>{calculate.text}</p>
                <div className="calculate">
                    <div className="top-block">
                        <label htmlFor="give"><i className="icon-usd"/></label>
                        <input
                            type="number"
                            step="10"
                            id="give"
                            placeholder={calculate.inputGive}
                            ref="give"
                            onChange={()=>{this.calc()}}
                        />
                        <i className="icon-arrow-swap" />
                        <label htmlFor="vipcoin"><i className="icon-bitcoin-circle"/></label>
                        <input
                            type="number"
                            className="notActive"
                            id="vipcoin"
                            ref="get"
                            disabled="disabled"
                            placeholder={calculate.inputGet}
                        />
                        <i className="icon-arrow-graph-up-right"/>
                        <label htmlFor="profit"><i className="icon-usd"/></label>
                        <input
                            type="number"
                            className="notActive"
                            id="profit"
                            ref="profit"
                            disabled="disabled"
                            placeholder={calculate.inputProfit}
                        />
                    </div>
                    <div className="bottom">
                        <input
                            type="range"
                            min="1"
                            max="5"
                            ref="rangeYear"
                            defaultValue="1"
                            className="range-year"
                            onChange={()=>{ this.calc()}}
                        />
                        <h3>{`${calculate.inputYear1} ${valOfRange} ${calculate.inputYear2}`}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
