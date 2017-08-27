import React, {Component} from 'react';
import Login from "./login";
import Regstration from "./registration";
import ForgotPass from  './ForgotPass';
// import {addUser} from "../../../redux/front/front-actions";

import css from "../../../css/scss/layouts/auth.scss";

export default class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle: 0,
        }
    }

    highlight( { target } ){

        if(target.classList.contains('auth-head')) return;
        const last = document.getElementsByClassName('btn-active')[0];

        last.classList.remove('btn-active');
        target.classList.add('btn-active');
        const allBtns = document.getElementsByClassName('btn');
    };

    alerts(text){
        // const alert_container = document.getElementsByClassName("alert");
        const { alert_container } = this.refs;
        alert_container.innerHTML = text;
        alert_container.style.display = "flex";
        alert_container.style.opacity = 1;
        setTimeout(()=>{
            alert_container.style.opacity = 0;
            setTimeout(()=>{
                alert_container.style.display = "none";
            },500)
        },1800);
    }


    render(){
        const { toggle } = this.state;
        const {
            auth,
            style,
            toggleAuth,
            addUser,
            userState,
            request,
            loginUser,
            userLogin
        } = this.props;
        let show = "";
        switch (toggle){
            case 0:
                show = <Login
                    login={ auth.login }
                    alerts={this.alerts.bind(this)}
                    loginUser={ loginUser }
                    userLogin={ userLogin }
                />;
                break;
            case 1:
                show = <Regstration
                    registration={ auth.registration }
                    alerts={this.alerts.bind(this)}
                    addUser={ addUser }
                    userState={ userState }
                    request={ request }
                />;
                break;
            case 2:
                show = <ForgotPass forgot={auth.forgot} alerts={this.alerts.bind(this)}/>;
                break;
        }

        return (
            <div className="auth" style={style}>
                <div className="auth-container">
                    <div className="close" onClick={()=>{ toggleAuth(false) }}>
                        <i className="icon-times-circle"/>
                    </div>
                    <div className="alerts" ref="alert_container"/>
                    <div className="auth-head" onClick={this.highlight.bind(this)} >
                        <div className="btn btn-login btn-active" onClick={() => {
                            this.setState({toggle: 0})
                        }}>
                            {auth.header.btnLogin}
                        </div>
                        <div className="btn btn-registration"
                             onClick={() => {
                                this.setState({toggle: 1})
                             }}>
                            {auth.header.btnRegistration}
                        </div>
                        <div className="btn btn-forgotPass" onClick={() => {
                            this.setState({toggle: 2})
                        }}>
                            {auth.header.btnForgotPass}
                        </div>
                    </div>
                    <div className="auth-body">
                        { show }
                    </div>
                </div>
            </div>
        );
    }
}
