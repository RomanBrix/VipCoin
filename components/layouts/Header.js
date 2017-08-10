import React, {Component} from 'react';
import translate from "../../data/translate.json";
import css from '../../css/scss/layouts/header.scss';
import { LOGO } from '../../data/links';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.setCookie('language', 'ru',{expires: 350});
        this.state = {
            language: this.getCookie("language") || "ru"
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
        const lang = translate.filter(item =>{
           return item.language === this.state.language;
        });
        const { layouts } = lang[0];
        return(
            <div className="header">
                <div className="logo"><img src={ LOGO } alt="Logo"/></div>
                <div className="menu">
                    <ul>
                        <li><a href="index.html">{ layouts.header.btnOne }</a></li>
                        <li><a href="#">{ layouts.header.btnTwo }</a></li>
                        <li><a href="#">{ layouts.header.btnThree }</a></li>
                        <li><a href="#">{ layouts.header.btnFour }</a></li>
                    </ul>
                </div>
                <div className="login"/>
                <div className="lang">
                    <ul>
                        <li onClick={()=>{
                            this.setCookie('language', 'ru',{expires: 350});
                            this.setState({language: 'ru'});
                        }}>RU</li>
                    </ul>
                </div>
            </div>
        )
    }
}
