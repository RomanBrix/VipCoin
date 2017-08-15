import React, {Component} from 'react';
import translate from "../../data/translate.json";
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
// import FontBitCoin from "../../public/src/main/FontBitcoin/styles.css";
import { BG_COIN } from '../../data/links';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Auth from '../layouts/auth'
import Container from './Container';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: props.language || "ru",
        }
    }

    render(){
        const { setLanguage } = this.props;
        const { language } = this.state;
        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];
        const { layouts } = lang[0];

        return (
            <div className="Main">
                <Auth auth={ layouts.auth }/>
                <Header setLanguage={setLanguage}/>
                <div className="bg" style={ {backgroundImage: `url(${BG_COIN})`} }/>
                <div className="container">
                    <Container pages={pages.main}/>
                </div>
                <Footer footer={ layouts.footer } />
            </div>
        )
    }
}

