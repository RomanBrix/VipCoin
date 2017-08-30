import React, {Component} from 'react';
import translate from "../../../data/translate.json";
import FooterIcons from "../../../public/src/Fonts/FontsIcons/styles.css";
import { BG_COIN } from '../../../data/links';
import ProfileHeader from '../layouts/ProfileHeader';
import Container from './Container';

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

        props.getPackages("package");
        props.getUserInfo("infooo", this.state.user);
    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { language } = this.state;
        const { hash, packages, user } = this.props;

        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];

        return (
            <div className="Main">
                <div className="bg" style={{backgroundImage: `url(../${BG_COIN})`}}/>
                <div className="container">
                    <ProfileHeader head={pages.profile.layouts.leftHeader} user={ user }/>
                    <div className="right-container">
                        <Container profile={pages.profile} packages={ packages } user={ user }/>
                    </div>
                </div>
            </div>
        );
    }
}

