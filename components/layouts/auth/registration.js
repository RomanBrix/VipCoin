import React, {Component} from 'react';

export default class Registration extends Component {
    render(){
        const { registration } = this.props;
        return(
            <div className="rendered-container">
                <div className="inputs">
                    <label htmlFor="login"><i className="icon-user"/></label>
                    <input type="login" id="login" name="login" placeholder={registration.inputLogin}/>
                </div>
                <div className="inputs">
                    <label htmlFor="email"><i className="icon-at"/></label>
                    <input type="email" name="email" id="email" placeholder={registration.inputEmail}/>
                </div>
                <div className="inputs">
                    <label htmlFor="password"><i className="icon-unlock-alt"/></label>
                    <input type="password" id="password" name="password" placeholder={registration.inputPassword}/>
                </div>
                <div className="inputs">
                    <label htmlFor="repassword"><i className="icon-unlock"/></label>
                    <input type="password" name="repassword" id="repassword"/>
                </div>
                <div className="btn-ok">{registration.btnRegistration}</div>
            </div>
        )
    }
}
