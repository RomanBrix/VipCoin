import React, {Component} from 'react';
import translate from "../../data/translate.json";
import { BG_COIN } from '../../data/links';
import Header from '../layouts/Header';
import Container from './Container';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: this.getCookie('language') || "ru"
        }
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
        const { pages } = lang[0];

        return (
            <div className="Main">
                    
                <Header/>
                <div className="bg" style={ {backgroundImage: `url(${BG_COIN})`} }>
                    {/*<img src="./src/main/bitcoin1.png" className="bg" alt=""/>*/}
                    {/*<div/>*/}
                </div>
                <div className="container">

                    <Container pages={pages.main}/>

                </div>
            </div>
        )
    }
}
