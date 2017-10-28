import React, {Component} from 'react';

export default class Pluses extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="pluses">
                <div className="pluses-container">
                    <div className="systems locked">
                        <div className="logo">
                            <img src="./src/lock.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>{pages.secur.head}:</h3>
                            <p>{pages.secur.body}.</p>
                        </div>
                    </div>

                    <div className="systems insure">
                        <div className="logo">
                            <img src="./src/check-square.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>{pages.tech.head}:</h3>
                            <p>{pages.tech.body}.</p>
                        </div>
                    </div>

                    <div className="systems deposit">
                        <div className="logo">
                            <img src="./src/deposit.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>{pages.ownWallet.head}:</h3>
                            <p>{pages.ownWallet.body}.</p>
                        </div>
                    </div>

                    <div className="systems money">
                        <div className="logo">
                            <img src="./src/money.png" alt=""/>
                        </div>
                        <div className="text">
                            <h3>{pages.payMethod.head}:</h3>
                            <p>{pages.payMethod.body}.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
