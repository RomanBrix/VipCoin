import React, {Component} from 'react';

export default class Menu extends Component {
    render(){
        return(
            <div className="mini-menu">
                <div className="my-money">
                    <h2>Мои монеты:</h2>
                    <div className="out">
                        <div className="img">
                            <img src="../src/VipCoin.png" alt="coin"/>
                        </div>
                        <span className="bold">124124</span> = USD:<span className="bold">123124</span>
                    </div>
                </div>
                <div className="help">
                    <h2>Помощь:</h2>
                    <div className="settings">
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
