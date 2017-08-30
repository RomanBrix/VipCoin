import React, {Component} from 'react';

export default class Refill extends Component {
    constructor(props){
        super(props);
        this.state={
            options: false,
            packageSelected: false,
            payment: false
        }
    }

    specialPrice(minCoins, maxCoins, name){
        this.setState({
            options: true,
            packageSelected: name
        });
        setTimeout(()=>{

            const { packages, user } = this.props;
            const { coins } = this.refs;
            const special = document.getElementById('specialPrice');
            coins.value = minCoins;
            coins.min = minCoins;
            coins.max = maxCoins;

            let statusPrice = 0;
            let indexStatusPrice = 0;
            let selectedPrice = 0;
            let indexSelectedPrice = 0;

            packages.map((item,index)=>{
                if(item.name.toUpperCase() === user[0].status.toUpperCase()){
                    // console.group("statusPrice");
                    // console.log(index);
                    // console.log(item.oneCoinCost);
                    // console.groupEnd("statusPrice");

                    indexStatusPrice = index;
                    statusPrice = +item.oneCoinCost;
                }
                if(item.name.toUpperCase() === name.toUpperCase()){
                    // console.group("selected");
                    // console.log(index);
                    // console.log(item.oneCoinCost);
                    // console.groupEnd("selected");

                    indexSelectedPrice = index;
                    selectedPrice = item.oneCoinCost;
                }
            });
            let finalPrice = statusPrice;
            if(statusPrice > selectedPrice){
                finalPrice = selectedPrice;
            }
            // console.group("final Price");
            // console.log(finalPrice);
            // console.groupEnd("final Price");



            special.innerHTML = finalPrice;
            this.calculateCost(finalPrice);


        },75);

    }

    calculateCost(finalPrice){
        const { coins } = this.refs;
        const totalCost = document.getElementById('cost');

        // console.group('min and max');
        // console.log(coins.min, coins.max);
        // console.groupEnd('min and max');
        // console.log(+coins.value < +coins.min);
        // console.log(+coins.value > +coins.max);

        if(+coins.value < +coins.min) coins.value = coins.min;
        if(+coins.value > +coins.max) coins.value = coins.max;
        // console.log(finalPrice);
        totalCost.innerHTML = (+coins.value * finalPrice);


    }

    generateCode(){
        const { user } = this.props;
        const { packageSelected, payment } = this.state;
        this.setState({
            payment: true
        });


        setTimeout(()=>{

            const { coins, commentCode } = this.refs;

            const { hash } = user[0];
            const specialPrice = document.getElementById('specialPrice');
            const cost = document.getElementById('cost');

            function b64EncodeUnicode (str){
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
                    function toSolidBytes (match, p1){
                        return String.fromCharCode('0x' + p1);
                    }));
            };

            const getCode = "" + packageSelected +
                "_" + specialPrice.innerHTML +
                "_" + coins.value +
                "_" + cost.innerHTML;


            commentCode.value = b64EncodeUnicode(hash +"&"+getCode);

        },75);

    }
    render(){
        const { packages } = this.props;
        const { options,payment } = this.state;
        const colors = ['#f2b01e','#ccc2c2','#f2b01e','#e5c100','#b9f2ff'];
        const logo = ["icon-star", "icon-ribbon-a", "icon-trophy","icon-crown-king-1","icon-diamond"];
        const packageContainer = packages.map((item, index)=>{
            return (
                <div
                    id={`logo${index}`}
                    key={index}
                    style={{color: colors[index]}}
                    onClick={()=>{
                        this.specialPrice(+item.minCoins, +item.maxCoins, item.name)
                    }}
                >
                    <i className={logo[index]}/>
                    <p>{item.name}</p>
                </div>
            )
        });

        return(
            <div className="refill">
                <h1>КУПИТЬ</h1>
                <div className="refill-container">
                    <div className="packages">
                        { packageContainer }
                    </div>
                    {   options ?
                        <div className="options">
                            <div className="specCost">
                                Ur special price: <span id="specialPrice">0</span>
                            </div>
                            <div id="howMuch">
                                <input type="number" id="coins" ref="coins" onBlur={() => {
                                    const finalPrice = document.getElementById('specialPrice');
                                    this.calculateCost(finalPrice.innerHTML);
                                }}/>
                            </div>
                            <div>
                                <i className="icon-usd"/>
                                <span id="cost">0</span>
                            </div>
                            <div className="btn-buy" onClick={this.generateCode.bind(this)}>
                                Купить
                            </div>
                        </div> : ""
                    }
                    { payment ?
                        <div className="payment">
                            <div className="wallets">
                                <div className="bitcoin">
                                    Bitcoin
                                </div>
                                <div className="currChange">
                                    Обменка
                                </div>
                            </div>
                            <div className="codes">
                                <div className="comment-code">
                                    ваш код для комментария:<br/>
                                    <input type="text" ref="commentCode"
                                           style={{
                                               width: '100%',
                                               textAlign: 'center'
                                           }}/>
                                </div>
                                <div className="walletUrl">
                                    Кошелек:<br/>
                                    <input type="text" ref="walletUrl"/>
                                </div>
                            </div>
                        </div> : ""
                    }
                </div>
            </div>

        )

    }
}
