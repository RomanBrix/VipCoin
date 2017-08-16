import React, {Component} from 'react';

export default class Login extends Component {
    render(){
        const { login } = this.props;

        return (
            <div className="rendered-container">
                <div className="inputs">
                    <label htmlFor="login"><i className="icon-user"/></label>
                    <input type="login" id="login" name="login" placeholder={login.inputLogin}/>
                </div>
                <div className="inputs">
                    <label htmlFor="password"><i className="icon-unlock-alt"/></label>
                    <input type="password" id="password" name="password" placeholder={login.inputPassword}/>
                </div>
                <div className="btn-ok">{login.btnEnter}</div>
            </div>
        );
    }
}
