import React, {Component} from 'react';

export default class Calculator extends Component {
    highlightPackage(target) {
        const selected = document.getElementsByClassName("active-package")[0];
        if(target.classList[0] === "check-package"){
            if (selected) {
                selected.classList.remove('active-package');
            }
            target.classList.add('active-package');
        }
        if(target.tagName === 'I'){
            const new_target = target.parentNode;
            if (selected) {
                selected.classList.remove('active-package');
            }
            new_target.classList.add('active-package');

        }

        this.calculate();
    }
    calculate(){
        const selected = document.getElementsByClassName("active-package")[0];
        const data = selected.dataset;
        const {min, max, cost} = data;
        const { input_coins, range_year } = this.refs;
        const give = document.getElementById('give-value');
        const take = document.getElementById('take-value');
        let sale = 0;

        if(+input_coins.value > +max){
            input_coins.value = max;
            this.alerts("to high");
            // console.log("to high");
        }
        if(+input_coins.value < +min) {
            input_coins.value = min;
            this.alerts("to low");
            // console.log("");
        }

        switch (+range_year.value){
            case 1:
                sale = 864;
                break;
            case 2:
                sale = 1257;
                break;
            case 3:
                sale = 1634 ;
                break;
            case 4:
                sale = 1934;
                break;
            case 5:
                sale = 2149;
                break;
        }

        const bought = (+input_coins.value * cost).toFixed(2);
        const sold = (+input_coins.value * sale).toFixed(2);

        give.innerHTML = bought;
        take.innerHTML = sold;

    }
    alerts(text){
        const alert_container = document.getElementById("alert");
        alert_container.innerHTML = text;
        alert_container.style.display = "flex";
        alert_container.style.opacity = 1;
        setTimeout(()=>{
            alert_container.style.opacity = 0;
            setTimeout(()=>{
                alert_container.style.display = "none";
            },500)
        },1800);
    }
    render(){

        const { calculate, packages } = this.props;
        const colors = ['#f2b01e','#ccc2c2','#f2b01e','#e5c100','#b9f2ff'];
        const logo = ["icon-star", "icon-ribbon-a", "icon-trophy","icon-crown-king-1","icon-diamond"];
        const packageContainer = packages.map((item, index)=>{
            return (
                <div
                    id={`logo${index}`}
                    key={index}
                    style={{color: colors[index]}}
                    className={index === 0 ? "check-package active-package": "check-package"}
                    data-min={item.option.coinsMin}
                    data-max={item.option.coinsMax}
                    data-cost={item.price}
                >

                    <i className={logo[index]}/>
                </div>
            )
        });
        return(
        <div className="calculator">
            <div id="alert">asdas</div>
                <h1>{calculate.title}</h1>
                <p>{calculate.text}</p>
                <div className="calculator-body">
                    <div className="calculator-top">
                        <i className="icon-bitcoin-circle"/>
                        <input
                            type="number"
                            ref="input_coins"
                            onBlur={this.calculate.bind(this)}
                            placeholder={calculate.inputCoins}
                        />
                        <i className="icon-bitcoin-circle"/>
                    </div>
                    <div className="calculator-package" onClick={({target})=>{
                        this.highlightPackage(target);
                    }}>
                        { packageContainer }
                    </div>
                    <div className="calculator-years">
                        <input
                            type="range"
                            min={1}
                            max={5}
                            ref="range_year"
                            onChange={this.calculate.bind(this)}
                            defaultValue="2"
                        />
                    </div>
                    <div className="calculator-out">
                        <div className="give">
                            <i className="icon-usd"/>
                            <span id="give-value">
                                0
                            </span>
                        </div>
                        <i className="icon-arrow-graph-up-right"/>
                        <div className="take">
                            <i className="icon-usd"/>
                            <span id="take-value">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
