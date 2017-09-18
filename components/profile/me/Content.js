import React, {Component} from 'react';
import cryptoFonts from "../../../public/src/Fonts/CryptoFonts/cryptocoins.css";

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            buyIt: false,
            bitcoinCode: "azxc234sf98xvvs0231s",
            liteCoinCode: "lk26hjg67gjh4hgj343",
            ethCode: "53298ccsadfsdSasc34xs",
            swiftCode: "87vg90ewr239r8fsd87f",
            tradeCurr: "",
        }
    }

    secretCode(str){
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes (match, p1){
                return String.fromCharCode('0x' + p1);
            }));
    };

    setCodes() {
        const curr = document.getElementsByClassName('actived')[0];
        if (curr) {
            this.setState({
                buyIt: true
            })
            const currID = curr.id;
            const {bitcoinCode, liteCoinCode, ethCode, swiftCode, tradeCurr} = this.state;
            const arr = [bitcoinCode, liteCoinCode, ethCode, swiftCode, tradeCurr];
            const {user, coin_cost} = this.props;
            const totalPrice  = document.getElementById("price");


            setTimeout(()=>{
                const {wallet_code, exactCoins, pay_code} = this.refs;
                const secondPartOfCode = coin_cost + "_" + totalPrice.innerHTML + "_" + exactCoins.value ;
                console.log(secondPartOfCode);
                const fullSecretCode = this.secretCode(user.hash + "&" + secondPartOfCode);

                wallet_code.value = arr[currID];
                pay_code.value = fullSecretCode;
            }, 150);





        }
    }

    getTotalCostAutomatic(coins){
        const { exactCoins } = this.refs;
        exactCoins.value = coins;
        this.getTotalCost(coins);

    }
    getTotalCost(exactCoins){
        const { crypto, coin_cost } = this.props;


        const finalPrice = (+exactCoins * +coin_cost).toFixed(2);

            const bitPrice = (finalPrice * +crypto[0]).toFixed(7);
            const litePrice = (finalPrice * +crypto[1]).toFixed(7);
            const etPrice = (finalPrice * +crypto[2]).toFixed(7);
            const swPrice = finalPrice;
            const totPrice = finalPrice;

            this.insert(bitPrice, litePrice, etPrice, swPrice, totPrice);

    }

    insert(bitPrice, litePrice, etPrice, swPrice, totPrice){
        const bitcoinPrice = document.getElementById('bitcoin');
        const litecoinPrice = document.getElementById('litecoin');
        const etheriumPrice = document.getElementById('etherium');
        const swiftPrice = document.getElementById('swift');
        const totalPrice = document.getElementById('price');

        totalPrice.innerHTML = totPrice;
        bitcoinPrice.innerHTML = bitPrice;
        litecoinPrice.innerHTML = litePrice;
        etheriumPrice.innerHTML = etPrice;
        swiftPrice.innerHTML = swPrice;
    }
    render(){
        const { coins_value } = this.props;
        const { buyIt } = this.state;
        return(
            <div className="content-box">
                <h1>Купить монеты:</h1>
                <div className="first-stage">
                    <h3>
                        <span className="stage">1</span> Выберете или укажите нужное количество монет:
                    </h3>
                    <div className="selectPack" onClick={({target})=>{
                        this.highlight('coins', target);
                    }}>
                        <div className="coins" id={1000}>
                            <span className="small">монет</span>
                            <span className="bold">1.000</span>
                        </div>
                        <div className="coins" id={5000}>
                            <span className="small">монет</span>
                            <span className="bold">5.000</span>
                        </div>
                        <div className="coins" id={10000}>
                            <span className="small">монет</span>
                            <span className="bold">10.000</span>
                        </div>
                        <div className="coins" id={15000}>
                            <span className="small">монет</span>
                            <span className="bold">15.000</span>
                        </div>
                        <div className="coins" id={20000}>
                            <span className="small">монет</span>
                            <span className="bold">20.000</span>
                        </div>
                    </div>
                    <div className="input">
                        <input
                            type="number"
                            placeholder="Введите желаемое количество монет"
                            ref="exactCoins"
                            max={coins_value}
                            onChange={({target})=>{
                                if(+target.value > +target.max) target.value = target.max;
                                this.getTotalCost(target.value);
                            }}
                        />
                    </div>
                </div>


                <div className="secondStage">
                    <h3>
                        <span className="stage">2</span> Выберете тип платежа:
                    </h3>
                    <div className="topPayment" onClick={({ target }) =>{
                        this.highlight("payment",target);
                    }}>
                        <div className="payment" id="0">
                            <i className="cc BTC-alt"/>
                            <div className="info">
                                <div className="top">
                                    bitcoin
                                </div>
                                <div className="bottom">
                                    <span id="bitcoin">0</span>
                                </div>
                            </div>
                        </div>
                        <div className="payment" id="1">
                            <i className="cc LTC-alt"/>
                            <div className="info">
                                <div className="top">
                                    litecoin
                                </div>
                                <div className="bottom">
                                    <span id="litecoin">0</span>
                                </div>
                            </div>
                        </div>
                        <div className="payment" id="2">
                            <i className="cc ETH-alt"/>
                            <div className="info">
                                <div className="top">
                                    etherium
                                </div>
                                <div className="bottom">
                                    <span id="etherium">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomPayment" onClick={({ target }) =>{
                        console.log( "topPayment" );
                        this.highlight("payment",target);
                    }}>
                        <div className="payment" id="3">
                            <i className="icon-arrow-swap"/>
                            <div className="info">
                                <div className="top">
                                    swift
                                </div>
                                <div className="bottom">
                                    $<span id="swift">0</span>
                                </div>
                            </div>
                        </div>
                        <div className="payment" id="4">
                            <i className="cc NVC"/>
                             ОБМЕНКА
                        </div>
                    </div>
                </div>


                <div className="third-stage">
                    <div className="price">
                        <span className="left">
                            Стоимость:
                        </span>
                        <span className="right">
                            $ <span id="price">0</span>
                        </span>
                    </div>
                    <div id="btn-buy" onClick={()=>{
                        const totalPrice  = document.getElementById("price");
                        console.log(+totalPrice.innerHTML > 0);
                        if(+totalPrice.innerHTML > 0){
                            this.setCodes();
                        }else{
                            this.getTotalCostAutomatic(1000);
                            this.setCodes.bind(this);
                        }
                    }}>Оплатить</div>
                </div>


                {
                    buyIt ?

                    <div className="codes">
                        <div className="wallet-code">
                            <input type="text" id="wallet_code" ref="wallet_code" disabled/>
                            <label htmlFor="wallet_code">Адресс кошелька:</label>
                            <span className="copy">копировать</span>
                        </div>
                        <div className="pay-code">
                            <input type="text" id="pay_code" ref="pay_code" disabled/>
                            <label htmlFor="pay_code">Код коментария (указывать во время оплаты):</label>
                            <span className="copy">копировать</span>
                        </div>
                    </div>

                        : ""
                }
            </div>
        )
    }




    highlight(type, target) {

        if(type==="coins") {
            const selected = document.getElementsByClassName("active")[0];
            if (selected) {
                selected.classList.remove('active');
            }
            if (target.classList[0] === "coins") {
                target.classList.add('active');
                this.getTotalCostAutomatic(+target.id);

            }
            if (target.classList[0] === "bold" || target.classList[0] === "small") {
                const new_target = target.parentNode;
                new_target.classList.add('active');
                this.getTotalCostAutomatic(+new_target.id);
            }
        }else{
            const selected = document.getElementsByClassName("actived")[0];
            if (selected) {
                selected.classList.remove('actived');
            }

            if (target.classList[0] === "payment") {
                target.classList.add('actived');
            }

            if (target.classList[0] === "info" || target.classList[0] === "cc") {
                const new_target = target.parentNode;

                new_target.classList.add('actived');
            }

            if (target.classList[0] === "top" || target.classList[0] === "bottom") {
                const new_target = target.parentNode.parentNode;
                new_target.classList.add('actived');
            }
            if (
                target.id === "bitcoin" ||
                target.id === "litecoin" ||
                target.id === "etherium" ||
                target.id === "swift"
            ) {
                const new_target = target.parentNode.parentNode.parentNode;
                new_target.classList.add('actived');
            }
        }
    }
}





