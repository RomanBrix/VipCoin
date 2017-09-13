import React, {Component} from 'react';

export default class Login extends Component {
    logIn(){
        const { login_log, login_pass } = this.refs;
        const { loginUser } = this.props;
        loginUser("in", login_log.value, login_pass.value);
    }
    render(){
        const { login, userLogin, alerts } = this.props;
        if(userLogin === true){
            window.location.href = 'profile/me.html';
        } else if(userLogin === "fail_login"){
            alerts("Login or Email isn`t correct");
        }else if(userLogin === "fail_password"){
            alerts("Password isn`t correct");
        }
        return (
            <div className="rendered-container">
                <div className="inputs">
                    <label htmlFor="login"><i className="icon-user"/></label>
                    <input
                        type="login"
                        id="login"
                        name="login"
                        placeholder={login.inputLogin}
                        ref="login_log"
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="password"><i className="icon-unlock-alt"/></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder={login.inputPassword}
                        ref="login_pass"
                    />
                </div>
                <div className="btn-ok" onClick={()=>{
                    // console.log("ok");
                    this.logIn();
                }}>{login.btnEnter}</div>
            </div>
        );
    }
}
