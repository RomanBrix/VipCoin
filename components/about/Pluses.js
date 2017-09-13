import React, {Component} from 'react';

export default class Pluses extends Component {
    render(){
        return(
            <div className="pluses">
                <div className="pluses-container">
                    <div className="systems locked">
                        <div className="logo">
                            <img src="./src/lock.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>Закрытость системы:</h3>
                            <p>Мы бросаем вызов статус-кво и выходят за рамки сегодняшнего дня, чтобы создать открытое финансовое будущее, которое поддерживает широчайший мирового сообщества возможно.</p>
                        </div>
                    </div>

                    <div className="systems insure">
                        <div className="logo">
                            <img src="./src/check-square.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>Застрахованость:</h3>
                            <p>Мы бросаем вызов статус-кво и выходят за рамки сегодняшнего дня, чтобы создать открытое финансовое будущее, которое поддерживает широчайший мирового сообщества возможно.</p>
                        </div>
                    </div>

                    <div className="systems deposit">
                        <div className="logo">
                            <img src="./src/deposit.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>Личный кошелёк:</h3>
                            <p>Мы бросаем вызов статус-кво и выходят за рамки сегодняшнего дня, чтобы создать открытое финансовое будущее.</p>
                        </div>
                    </div>

                    <div className="systems money">
                        <div className="logo">
                            <img src="./src/money.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>Способы оплаты:</h3>
                            <p>Более 10 способов пополнения баланса пользователя</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
