import React, {Component} from 'react';
import translate from "../../../data/translate.json";
import FooterIcons from "../../../public/src/Fonts/FontsIcons/styles.css";
import Header from '../../layouts/Header';
import Container from './Container';
import Footer from "../../layouts/Footer";

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

        props.getPackages("coinCost");
        props.getPackages("package");
        props.getUserInfo("infooo", this.state.user);
        props.getCrypto();

    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { language } = this.state;
        const {
            hash,
            global_coin_cost,
            coins_value,
            coin_cost,
            user,
            crypto,
            updateSettings,
            updated
        } = this.props;

        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];
        const { layouts } = lang[0];

        return (
            <div className="Main">
                <Header profile={true}/>
                <div className="container">
                        <Container
                            profile={pages.profile}
                            user={ user }
                            crypto={ crypto }
                            coins_value={ coins_value }
                            coin_cost={ coin_cost }
                            global_coin_cost={ global_coin_cost }
                            settingsPage={pages.profile.settings}
                            updateSettings={ updateSettings }
                            updated={ updated }
                            hash={ hash }
                        />
                </div>
                <Footer
                    profile={true}
                    footer={ layouts.footer }
                />
            </div>
        );
    }
}

