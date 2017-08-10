import React, {Component} from 'react';
import translate from "../../data/translate.json";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: this.getCookie("language") || "ru"
        }
    }

    setCookie(name, value, options){
        options = options || {};

        let expires = options.expires;
        if( typeof expires === 'number' && expires){
            let date = new Date();
                    console.log(date.getTime());
            date.setTime(date.getTime() + expires * 1000);
                    // console.log(date.getTime() + expires * 1000);
                    console.log(date.getTime());
            expires = options.expires = d;
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
        console.log(layouts);
        return(
            <div className="header">
                <div className="logo"/>
                <div className="menu">
                    <ul>
                        <li><a href="index.html">{ layouts.header.buttonOne }</a></li>
                    </ul>
                </div>
                <div className="lang">
                    <ul>
                        <li>RU</li>
                    </ul>
                </div>
            </div>
        )
    }
}
