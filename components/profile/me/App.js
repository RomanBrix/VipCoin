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

        this.state = {
            language: this.getCookie("language") || "ru",
        }
    }
    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }
    render(){
        const { language } = this.state;

        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];

        return (
            <div className="Main">
                <div className="bg" style={{backgroundImage: `url(../${BG_COIN})`}}/>
                <div className="container">
                    <LeftHeader head={pages.profile.layouts.leftHeader}/>
                    <div className="right-container">
                        <h1>
                            Hello
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

