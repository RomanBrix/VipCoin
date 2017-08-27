import React, {Component} from 'react';

export default class Registration extends Component {
    constructor(props){
        super(props);
        // props.addUser();
        this.state = {
            validate: {
                login:false,
                mail: false,
                password: false,
                repassword: false
            },
        }
    }
    registatrionFunc() {
        const {login, email, password, check_legal } = this.refs;
        const {validate} = this.state;
        const { alerts, addUser } = this.props;

        let errorMsg= "You have errors in:";
        for(let key in validate){
            if (validate.hasOwnProperty(key)) {
                if(validate[key] === false){
                    errorMsg = errorMsg + " " + key +";";
                }
            }
        }
        check_legal.checked === false ? errorMsg = errorMsg + " " + "did you confirm the legal?": errorMsg;

        if(errorMsg.length >20) {
            alerts(errorMsg);
        }else{
            addUser("checkLogin",login.value, email.value, password.value);

        }
    }


    Validate(type){

        const {
            login,
            loginLabel,
            email,
            emailLabel,
            password,
            passwordLabel,
            repassword,
            repasswordLabel
        } = this.refs;

        const { validate } = this.state;


        switch (type) {
            case "login":
                const usernameRegex = /^[a-zA-Z0-9_]+$/;
                if(usernameRegex.test(login.value) && login.value.length > 2){
                    loginLabel.style.color = "green";
                    login.style.borderBottomColor = "green";
                    validate.login = true;
                } else {
                    loginLabel.style.color = "red";
                    login.style.borderBottomColor = "red";
                    validate.login = false;

                }
                break;
            case "mail":
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(email.value)) {
                    emailLabel.style.color = "green";
                    email.style.borderBottomColor = "green";
                    validate.mail = true;
                } else {
                    emailLabel.style.color = "red";
                    email.style.borderBottomColor = "red";
                    validate.mail = false;
                }
                break;
            case "pass":
                if(password.value.length >= 4){
                    passwordLabel.style.color = "green";
                    password.style.borderBottomColor = "green";
                    validate.password = true;
                } else {
                    passwordLabel.style.color = "red";
                    password.style.borderBottomColor = "red";
                    validate.password = false;
                }
                break;
            case "repass":
                if(repassword.value === password.value){
                    repasswordLabel.style.color = "green";
                    repassword.style.borderBottomColor = "green";
                    validate.repassword = true;
                } else {
                    repasswordLabel.style.color = "red";
                    repassword.style.borderBottomColor = "red";
                    validate.repassword = false;
                }
                break;
        }
        this.setState({validate});
    }

    setCookie(name, value, options){
        options = options || {};

        let expires = options.expires;
        if( typeof expires === 'number' && expires){
            let date = new Date();
            date.setTime(date.getTime() + expires * 1000 * 60 * 60);
            expires = options.expires = date;
        }
        if(expires && expires.toUTCString()){
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        let updatedCookie = name + "="+ value;
        for( let propName in options){
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if(propValue !== true ){
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    render(){
        const { registration, userState, request, alerts } = this.props;
            if(userState.length > 15 ){
                this.setCookie("user",userState,  {expires: 350})
                alerts("all Ok");
            }else if(userState === false) {
                alerts("mail or login is using");
            }
        return(
            <div className="rendered-container">
                <div className="inputs">
                    <label htmlFor="login"><i className="icon-user" ref="loginLabel"/></label>
                    <input
                        onBlur={this.Validate.bind(this,"login")}
                        type="login"
                        id="login"
                        name="login"
                        ref="login"
                        placeholder={registration.inputLogin}/>
                </div>
                <div className="inputs">
                    <label htmlFor="email"><i className="icon-at" ref="emailLabel"/></label>
                    <input
                        onBlur={this.Validate.bind(this,"mail")}
                        type="email"
                        name="email"
                        id="email"
                        ref="email"
                        placeholder={registration.inputEmail}/>
                </div>
                <div className="inputs">
                    <label htmlFor="password"><i className="icon-unlock-alt" ref="passwordLabel"/></label>
                    <input
                        onBlur={this.Validate.bind(this,"pass")}
                        type="password"
                        id="password"
                        name="password"
                        ref="password"
                        placeholder={registration.inputPassword}/>
                </div>
                <div className="inputs">
                    <label htmlFor="repassword"><i className="icon-unlock" ref="repasswordLabel"/></label>
                    <input
                        onBlur={this.Validate.bind(this,"repass")}
                        type="password"
                        name="repassword"
                        id="repassword"
                        ref="repassword"
                        placeholder={registration.inputRepeatPassword}
                    />
                </div>
                <div className="check">
                    <input
                        type="checkbox"
                        ref="check_legal"
                    />
                    <span className="checkLegal">{registration.checkLegal}</span>
                </div>
                <div className="btn-ok" onClick={()=>{
                    this.registatrionFunc();
                }}>{registration.btnRegistration}</div>
            </div>
        )
    }
}
