import React, {Component} from 'react';
import Login from "./login";
import Regstration from "./registration";
import ForgotPass from  './ForgotPass';
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
        console.log(last);

        last.classList.remove('btn-active');
        target.classList.add('btn-active');
        const allBtns = document.getElementsByClassName('btn');
    };


    render(){
        const { toggle } = this.state;
        const { auth, style, toggleAuth } = this.props;
        let show = "";
        switch (toggle){
            case 0:
                show = <Login login={ auth.login }/>;
                break;
            case 1:
                show = <Regstration registration={ auth.registration }/>;
                break;
            case 2:
                show = <ForgotPass forgot={auth.forgot}/>;
                break;
        }

        return (
            <div className="auth" style={style}>
                <div className="auth-container">
                    <div className="close" onClick={()=>{ toggleAuth(false) }}>
                        <i className="icon-times-circle"/>
                    </div>
                    <div className="auth-head" onClick={this.highlight.bind(this)} >
                        <div className="btn btn-login btn-active" onClick={() => {
                            this.setState({toggle: 0})
                        }}>
                            {auth.header.btnLogin}
                        </div>
                        <div className="btn btn-registration" onClick={() => {
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
