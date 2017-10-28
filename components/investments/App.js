import React, {Component} from 'react';
import translate from "../../data/translate.json";
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
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
            auth: false,
        }
        props.getTableInvest("getLastInvestors");
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.language.length > 1){
            this.setState({
                language: nextProps.language
            })
        }
    }

    toggleAuth(auth){
        this.setState({
            auth
        });
    }


    render(){
        const {
            setLanguage,
            addUser,
            userState,
            request,
            loginUser,
            userLogin,
            tableInvest
        } = this.props;
        console.log(tableInvest);
        const { language, auth } = this.state;

        const lang = translate.filter(item =>{
            return item.language === language;
        });
        const { pages } = lang[0];
        const { layouts } = lang[0];


        const body = document.body;
        let style = {};
        if(auth){
            body.style.overflow = "hidden";
            style ={
                display: "flex",
                opacity: 1
            }

        }else{
            body.style.overflow = "auto";
            style ={
                opacity: 0,
                display: "none",

            }
        }


        return (
            <div className="Main">
                <Auth
                    auth={ layouts.auth }
                    toggleAuth={ this.toggleAuth.bind(this) }
                    style={ style }
                    addUser={ addUser }
                    userState={ userState }
                    request={ request }
                    loginUser={ loginUser }
                    userLogin={ userLogin }
                />
                <Header
                    investments={true}
                    setLanguage={ setLanguage }
                    toggleAuth={ this.toggleAuth.bind(this) }
                />
                <div className="bg" style={ {backgroundImage: `url(${BG_COIN})`} }/>
                <div className="container">
                    <Container pages={pages.investments} tableInvest={tableInvest}/>
                </div>
                <Footer footer={ layouts.footer } />
            </div>
        )
    }
}

