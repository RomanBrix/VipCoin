import React, {Component} from 'react';
import translate from "../../data/translate.json";
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
import css from '../../css/scss/layouts/header.scss';
import {
    LOGO,
    FLAG_RU,
    FLAG_ENG,
    FLAG_JAP,
    FLAG_USA,
    PAGES
} from '../../data/links';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.setCookie('language', 'ru',{expires: 350});
        this.state = {
            language: this.getCookie("language") || "ru"
        };
        props.setLanguage(this.state.language);
    }
    componentDidMount(){
        const {main, about, packages, faq, news, contacts} = this.props;
        const arr = [main, about, packages, faq, news, contacts];
        let ask = 0;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === true ){
                ask = i;
            }
        }
        const header = document.getElementsByClassName('header')[0];
        const listArray = header.children[1].children[0].children;
        switch(ask) {
            case 0 :
                listArray[0].classList.add('active');
                break;

            case 1:
                listArray[1].classList.add('active');
                break;
            case 2:
                listArray[2].classList.add('active');
                break;
            case 3:
                listArray[3].classList.add('active');
                break;
            case 4:
                listArray[4].classList.add('active');
                break;
            case 5:
                listArray[5].classList.add('active');
                break;

            default : console.log('op'); break;
        }
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

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { toggleAuth } = this.props;
        const lang = translate.filter(item =>{
           return item.language === this.state.language;
        });
        const { layouts } = lang[0];
        return (
            <div className="header">
                <a href={PAGES.MAIN} id="logo">
                    <div className="logo">
                        <img src={LOGO} alt="Logo"/>
                        <span className="bold">VIP</span>Coin
                    </div>
                </a>
                <div className="menu">
                    <ul>
                        <li>
                            <a href={PAGES.MAIN}>
                                {layouts.header.btnMain}
                            </a>
                        </li>
                        <li>
                            <a href={PAGES.ABOUT_US}>
                                {layouts.header.btnAbout}
                            </a>
                        </li>
                        <li>
                            <a href={PAGES.PACKAGES}>
                                {layouts.header.btnPackages}
                            </a>
                        </li>
                        <li>
                            <a href={PAGES.FAQ}>
                                {layouts.header.btnFAQ}
                            </a>
                        </li>
                        <li>
                            <a href={PAGES.NEWS}>
                                {layouts.header.btnNews}
                            </a>
                        </li>
                        <li>
                            <a href={PAGES.CONTACT_US}>
                                {layouts.header.btnContacts}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="login" onClick={()=>{
                    const user = this.getCookie('user');
                    console.log(user);
                    if(user !== undefined) {
                        if(user.length > 15) {
                            window.location.href = 'profile/me.html';
                        }
                    }else{
                        toggleAuth(true)
                    }
                }}>
                    {layouts.header.login.log}
                </div>

            </div>
        );
    }
}

/*
<div className="lang dropdown">
                    <span id="active_lang">
                        <img src={`./src/header/${this.state.language}.svg`} alt="active_lang"/>
                    </span>
                    <div className="dropdown-content dropdown-main">
                        <span onClick={() => {
                            this.setCookie('language', 'ru', {expires: 350});
                            this.setState({language: 'ru'});
                            console.log("1")
                        }}><img src={FLAG_RU} alt="ru"/>
                        </span>
                        <span onClick={() => { console.log("2") }}>
                            <img src={FLAG_ENG} alt="eng"/>
                        </span>
                        <span onClick={() => { console.log("3") }}>
                            <img src={FLAG_JAP} alt="japan"/>
                        </span>
                        <span onClick={() => { console.log("4") }}>
                            <img src={FLAG_USA} alt="usa"/>
                        </span>
                    </div>
                </div>
 */