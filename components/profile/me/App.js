import React, {Component} from 'react';
import translate from "../../../data/translate.json";
import FooterIcons from "../../../public/src/Fonts/FontsIcons/styles.css";
import { BG_COIN } from '../../../data/links';
import LeftHeader from '../layouts/LeftHeader';
// import Footer from '../layouts/Footer';
// import Auth from '../layouts/auth'
// import Container from './Container';

export default class App extends Component {
    constructor(props){
        super(props);
        props.getHash(this.getCookie("user"));
        this.state = {
            language: this.getCookie("language") || "ru",
            user: this.getCookie("user")
        };
        if(this.state.user === undefined){
            window.location.href = '../index.html';
        }else if(this.state.user.length < 15){
            window.location.href = '../index.html';

        }
    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { language, user } = this.state;
        const { hash } = this.props;

        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];

        console.log(user);
        return (
            <div className="Main">
                <div className="bg" style={{backgroundImage: `url(../${BG_COIN})`}}/>
                <div className="container">
                    <LeftHeader head={pages.profile.layouts.leftHeader}/>
                    <div className="right-container">
                        <h1 onClick={()=>{ console.log(this.props.hash)}}>
                            Hello
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

