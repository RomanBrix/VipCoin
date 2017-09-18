import React, {Component} from 'react';
import cryptoFonts from "../../../public/src/Fonts/CryptoFonts/cryptocoins.css";

export default class Content extends Component {

    highlight(type, target) {
        const selected = document.getElementsByClassName("active")[0];
        // console.log(target.chil);
        if(type==="coins") {
            if (target.classList[0] === "coins") {
                if (selected) {
                    selected.classList.remove('active');
                }
                target.classList.add('active');
                console.log(target);
            }
            if (target.classList[0] === "bold" || target.classList[0] === "small") {
                const new_target = target.parentNode;
                if (selected) {
                    selected.classList.remove('active');
                }
                new_target.classList.add('active');
                console.log(new_target);
            }
        }else{
            console.log(document.getElementsByClassName("active"));
            const paymentSelected = document.getElementsByClassName("active");
            console.log(paymentSelected[0]);
            let golovaNeRabotaetYje = "";
            if(paymentSelected[0]){
                if(paymentSelected[0].classList.contains('payment')) {
                    golovaNeRabotaetYje = paymentSelected[0];
                    golovaNeRabotaetYje.classList.remove('active');
                }else if(paymentSelected[1].classList.contains('payment')){
                    golovaNeRabotaetYje = paymentSelected[1];
                    golovaNeRabotaetYje.classList.remove('active');
                }
            }

            if (target.classList[0] === "payment") {
                target.classList.add('active');
            }
            if (target.classList[0] === "info" || target.classList[0] === "cc") {
                const new_target = target.parentNode;

                new_target.classList.add('active');
            }
        }
    }

    getTotalCost(type, exactCoins){
        const { crypto, coin_cost } = this.props;
        // const { exactCoins } = this.refs;
        console.log(+coin_cost);
        const bitcoinPrice = document.getElementById('bitcoin');
        const litecoinPrice = document.getElementById('litecoin');
        const etheriumPrice = document.getElementById('etherium');
        const swiftPrice = document.getElementById('swift');
        const totalPrice = document.getElementById('price');
        const finalPrice = (+exactCoins * +coin_cost).toFixed(2);
        console.log(finalPrice);
        console.log(
            finalPrice * +crypto[0],
            finalPrice * +crypto[1],
            finalPrice * +crypto[2]
        );


        if(type === "manual_input") {
            bitcoinPrice.innerHTML = (finalPrice * +crypto[0]).toFixed(7);
            litecoinPrice.innerHTML = (finalPrice * +crypto[1]).toFixed(7);
            etheriumPrice.innerHTML = (finalPrice * +crypto[2]).toFixed(7);
            swiftPrice.innerHTML = finalPrice;
            totalPrice.innerHTML = finalPrice;

        }
    }

    render(){
        const { coins_value } = this.props;
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
                                this.getTotalCost("manual_input", target.value);
                            }}
                        />
                    </div>
                </div>


                <div className="secondStage">
                    <h3>
                        <span className="stage">2</span> Выберете тип платежа:
                    </h3>
                    <div className="topPayment" onClick={({ target }) =>{
                        console.log( "topPayment" );
                        this.highlight("payment",target);
                    }}>
                        <div className="payment" >
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
                        <div className="payment">
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
                        <div className="payment">
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
                        <div className="payment">
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
                        <div className="payment" id="currChange">
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
                    <div id="btn-buy">Оплатить</div>
                </div>



                <div className="codes">
                    <div className="wallet-code">
                        <input type="text" id="wallet_code"/>
                        <label htmlFor="wallet_code">Адресс кошелька:</label>
                        <span className="copy">копировать</span>
                    </div>
                    <div className="pay-code">
                        <input type="text" id="pay_code"/>
                        <label htmlFor="pay_code">Код коментария (указывать во время оплаты):</label>
                        <span className="copy">копировать</span>
                    </div>
                </div>
            </div>
        )
    }
}
