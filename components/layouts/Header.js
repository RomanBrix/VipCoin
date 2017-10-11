import React, {Component} from 'react';
import axios from 'axios';
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
            language: this.getCookie("language") || "ru",
            ltc: 0,
            btc: 0,
            eth: 0,
            vpc: 0,
            NAME: undefined,
            exit: false,
        };
        if (!props.profile) {
            props.setLanguage(this.state.language);
        }else{

        }
        this.getCurrVal();
        this.getVPC();
        const loggedUser = this.getCookie("user");
        if(loggedUser !== undefined){
            this.getUserName(loggedUser);
        }

    }
    componentDidMount(){
        const {main, about, packages, faq, investments, news, contacts} = this.props;
        const arr = [main, about, packages, faq, investments, news, contacts];
        let ask = undefined;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === true ){
                ask = i;
            }
        }

        const header = document.getElementsByClassName('menu')[0];
        const listArray = header.children[0].children;
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
                listArray[4].classList.add('active');
                break;
            case 6:
                listArray[5].classList.add('active');
                break;

            default : break;
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

    getUserName(loggedUser){
        const that = this;
        axios.get(`http://localhost:8888/vipcoin/profile/userInfo.php`, {params: {type:"header",hash:loggedUser}})
            .then(function(res) {
                that.setState({
                    NAME: res.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getCurrVal() {
        const that = this;
        axios.all([this.getLTC(), this.getBTC(),this.getETH()])
            .then(axios.spread(function (ltc, btc, eth) {
                that.setState({
                    ltc: parseFloat(ltc.data.ticker.price).toFixed(2),
                    btc: parseFloat(btc.data.ticker.price).toFixed(2),
                    eth: parseFloat(eth.data.ticker.price).toFixed(2),

                })
            }));
    }


    getVPC() {
        const that = this;
        axios.get(`http://localhost:8888/vipcoin/generally.php`, {params: {type:"coinCost"}})
            .then(function(res) {
                // console.log(res);
                // dispatch({type: act.GET_PACKAGES_INFO, packages: res.data})
                // NAME = res.data;
                that.setState({
                    vpc: res.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getLTC() {
        return axios.get('https://api.cryptonator.com/api/ticker/ltc-usd');
    }

    getBTC() {
        return axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    }
    getETH(){
        return axios.get('https://api.cryptonator.com/api/ticker/eth-usd');
    }

    render(){
        const { toggleAuth, profile } = this.props;
        const lang = translate.filter(item =>{
           return item.language === this.state.language;
        });
        const { layouts } = lang[0];
        const { ltc, btc, eth,vpc, NAME, exit } = this.state;


        let LogoUrl = PAGES.MAIN;
        let LOGO_IMG = LOGO;
        let AboutUrl = PAGES.ABOUT_US;
        let PackUrl = PAGES.PACKAGES;
        let FAQ_Url = PAGES.FAQ;
        let NewsUrl = PAGES.NEWS;
        let ContactsUrl= PAGES.CONTACT_US;
        let investmentsUrl = PAGES.INVEST;

        let ICO_lang = {
            main: `./src/header/${this.state.language}.svg`,
            ru: FLAG_RU,
            japan: FLAG_JAP,
            usa: FLAG_USA,
            eng: FLAG_ENG,
        };
        if(profile){
            LogoUrl = "../"+ PAGES.MAIN;
            LOGO_IMG = "../"+ LOGO;
            AboutUrl = "../"+ PAGES.ABOUT_US;
            PackUrl = "../"+ PAGES.PACKAGES;
            FAQ_Url = "../"+ PAGES.FAQ;
            NewsUrl ="../"+ PAGES.NEWS;
            investmentsUrl = "../"+ PAGES.INVEST;
            ContactsUrl = "../"+ PAGES.CONTACT_US;
            ICO_lang = {
                main: `../src/header/${this.state.language}.svg`,
                ru: "."+FLAG_RU,
                japan: "."+FLAG_JAP,
                usa: "."+FLAG_USA,
                eng: "."+FLAG_ENG,
            }
        }
        // console.log(btc).toFixed(2));
        return (
            <div className="header">
                <div className="lookAtTopOfHisHead">
                    <div className="topContent">
                        <div className="currencys" onClick={()=>{
                            this.getCurrVal();
                        }}>
                            <div className="cryptoCurrency">BTC/USD: <span>{+btc}</span></div>
                            <div className="cryptoCurrency">LTC/USD: <span>{ltc}</span></div>
                            <div className="cryptoCurrency">ETH/USD: <span>{eth}</span></div>
                            <div className="cryptoCurrency">VPC/USD: <span>{vpc}</span></div>

                        </div>

                        <div className="lang dropdown">
                            <span id="active_lang">
                                <img src={ICO_lang.main} alt="active_lang"/>
                            </span>
                            <div className="dropdown-content dropdown-main">
                                <span onClick={() => {
                                    this.setCookie('language', 'ru', {expires: 350});
                                    this.setState({language: 'ru'});
                                    console.log("1")
                                }}>
                                    <img src={ICO_lang.ru} alt="ru"/>
                                </span>
                                <span onClick={() => {
                                    this.setState({language: 'eng'});
                                    console.log("2")
                                }}>
                                    <img src={ICO_lang.eng} alt="eng"/>
                                </span>
                                <span onClick={() => {
                                    this.setState({language: 'japan'});
                                    console.log("3")
                                }}>
                                    <img src={ICO_lang.japan} alt="japan"/>
                                </span>
                                <span onClick={() => {
                                    this.setState({language: 'usa'});
                                    console.log("4")
                                }}>
                                    <img src={ICO_lang.usa} alt="usa"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                    <a href={LogoUrl} id="logo">
                        <div className="logo">
                            <img src={LOGO_IMG} alt="Logo"/>
                            <span className="bold">VIP</span>Coin
                        </div>
                    </a>

                <div className="menu">
                    <ul>
                        <li>
                            <a href={LogoUrl}>
                                {layouts.header.btnMain}
                            </a>
                        </li>
                        <li>
                            <a href={AboutUrl}>
                                {layouts.header.btnAbout}
                            </a>
                        </li>
                        <li>
                            <a href={PackUrl}>
                                {layouts.header.btnPackages}
                            </a>
                        </li>
                        <li>
                            <a href={FAQ_Url}>
                                {layouts.header.btnFAQ}
                            </a>
                        </li>
                        <li>
                            <a href={investmentsUrl}>
                                {layouts.header.btninvestments}
                            </a>
                        </li>
                        <li>
                            <a href={ContactsUrl}>
                                {layouts.header.btnContacts}
                            </a>
                        </li>
                    </ul>
                </div>
                {NAME === undefined ?
                    <div className="login" onClick={() => {
                        const user = this.getCookie('user');
                        if (user !== undefined) {
                            if (user.length > 15) {
                                window.location.href = './profile/me.html';
                            }
                        } else {
                            toggleAuth(true)
                        }
                    }}>
                        {layouts.header.login.log}
                    </div>
                    :
                    <div id="logged" onClick={() => {
                        const user = this.getCookie('user');
                        if (user !== undefined) {
                            if (user.length > 15) {
                                window.location.href = 'http://localhost:8888/vipcoin/profile/me.html';
                            }
                        } else {
                            toggleAuth(true)
                        }
                    }}>
                        <i className="icon-user"/>
                        {NAME}
                        {profile ?
                            <div className="exit">
                                <i className="icon-chevron-down" onClick={(e)=>{
                                    this.setState({
                                        exit: !exit
                                    });
                                    e.stopPropagation();
                                }}/>
                                {exit ?
                                    <div className="btn-exit" onClick={(e)=>{
                                        document.cookie= "user=1; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                                        setTimeout(()=>{
                                            window.location.href = '../index.html';
                                        },200);
                                        e.stopPropagation();
                                    }}>
                                        <i className="icon-signout"/>
                                        {layouts.header.login.btnExit}
                                    </div>
                                    :""
                                }
                            </div>:""}
                    </div>
                }

            </div>
        );
    }
}