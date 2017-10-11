import React, {Component} from 'react';

export default class Menu extends Component {
    render(){
        const { user, global_coin_cost, switchSettings } = this.props;
        let options = {
            text: "USD:",
            style: {
                fontSize: "1.4em"
            }
        };

        if(+user.vipcoins_value > 1000000){
            options = {
                text: "$",
                style:{
                    fontSize: "1em"
                }
            }
        }
        return(
            <div className="mini-menu">
                <div className="my-money">
                    <h2>Мои монеты:</h2>
                    <div className="out">
                        <div className="img">
                            <img src="../src/VipCoin.png" alt="coin"/>
                        </div>
                        <span className="bold" style={options.style}>
                            { user.vipcoins_value }
                        </span> = {options.text}
                        <span className="bold"  style={options.style}>
                            { (+user.vipcoins_value * +global_coin_cost).toFixed(2) }
                        </span>
                    </div>
                </div>
                <div className="help">
                    <h2>Помощь:</h2>
                    <div className="settings" onClick={switchSettings}>
                        <i className="icon-settings"/>
                        Настройки
                    </div>
                    <a href="../faq.html">
                        <i className="icon-bubble-comment-streamline-talk"/>
                        Поддержка
                    </a>
                    <a href="../contacts.html">
                        <i className="icon-question-2"/>
                        FAQ
                    </a>
                </div>
            </div>
        )
    }
}
