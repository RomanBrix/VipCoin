import React, {Component} from 'react';
import css from '../../css/scss/layouts/footer.scss';
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
import { CONTACTS, PAGES } from '../../data/links';
import { FOOTER_BG } from '../../data/links';
import WhitePaper from "./WhitePaper";
import LegalPage from "./LegalPage";
import PrivacyPolicy from "./PrivacyPolicy";
import SellPolicy from "./SellPolicy";
import ContractOffer from "./ContractOffer";



export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleWhitePaper: false,
            toggleLegalPage: false,
            togglePrivacyPolicy: false,
            toggleSellPolicy: false,
            toggleContractOffer: false

        }
    }
    closeWhitePaper(){
        document.body.style.overflow = "auto";
        this.setState({
            toggleWhitePaper: false,
            toggleLegalPage: false,
            togglePrivacyPolicy: false,
            toggleSellPolicy: false,
            toggleContractOffer: false

        })
    }
    render(){
        const { footer, profile } = this.props;
        const {
            toggleWhitePaper,
            toggleLegalPage,
            togglePrivacyPolicy,
            toggleSellPolicy,
            toggleContractOffer
        } = this.state;

        let footBg = FOOTER_BG;
        if(profile){
            footBg = '.'+FOOTER_BG;
        }
        return(
            <div className="footer" style={{ backgroundImage: `url(${footBg})`} }>

                <div className="cont">
                    <div className="PP">
                       <ul>
                           <li>
                               <a onClick={()=>{
                                   document.body.style.overflow = "hidden";
                                    this.setState({
                                        toggleWhitePaper: true
                                    });
                               }}>
                                   {footer.pages.whitePage}
                               </a>
                           </li>

                           {
                               toggleWhitePaper ?
                               <WhitePaper closeWhitePaper={ this.closeWhitePaper.bind(this)}/> :
                               ""
                           }

                           <li>
                               <a onClick={()=>{
                                   document.body.style.overflow = "hidden";
                                   this.setState({
                                       toggleSellPolicy: true
                                   });
                               }}>
                                   { footer.pages.SellPolicy }
                               </a>
                           </li>

                           {
                               toggleSellPolicy ?
                                   <SellPolicy closeWhitePaper={ this.closeWhitePaper.bind(this)}/> :
                                   ""
                           }

                            <li>
                                <a onClick={()=>{
                                    document.body.style.overflow = "hidden";
                                    this.setState({
                                        toggleLegalPage: true
                                    });
                                }}>
                                    {footer.pages.legalPage}
                                </a>
                            </li>

                           {
                               toggleLegalPage ?
                                   <LegalPage
                                       text={footer.legalPage}
                                       closeWhitePaper={ this.closeWhitePaper.bind(this)}
                                   /> :
                                   ""
                           }

                            <li>
                                <a onClick={()=>{
                                    document.body.style.overflow = "hidden";
                                    this.setState({
                                        toggleContractOffer: true
                                    });
                                }}>
                                    {footer.pages.contractOffer}
                                </a>
                            </li>

                           {
                               toggleContractOffer ?
                                   <ContractOffer
                                       closeWhitePaper={ this.closeWhitePaper.bind(this)}

                                   /> :
                                   ""
                           }

                           <li>
                               <a onClick={()=>{
                                   document.body.style.overflow = "hidden";
                                   this.setState({
                                       togglePrivacyPolicy: true
                                   });
                               }}>
                                   { footer.pages.confidentiality }
                               </a>
                           </li>
                           {
                               togglePrivacyPolicy ?
                                   <PrivacyPolicy closeWhitePaper={ this.closeWhitePaper.bind(this)}/> :
                                   ""
                           }


                       </ul>
                    </div>
                    <div className="feedback">
                        <a href={PAGES.CONTACT_US}>
                            <i className="icon-mail"/>{footer.feedback}
                        </a>

                        <a href={`mailto:${CONTACTS.MAIL}`}>
                            <i className="icon-mail"/>test@gmail.com
                        </a>

                    </div>
                    <div className="contacts">
                        <a href={`tel:${CONTACTS.TELEPHONE}`}>
                            <i className="icon-call-phone"/>
                            +110-11-111-11-11
                        </a>
                        <a href={`tel:${CONTACTS.TELEPHONE}`}>
                            <i className="icon-call-phone"/>
                            +110-11-111-11-11
                        </a>
                        <a href={`skype:${CONTACTS.SKYPE}`}>
                            <i className="icon-skype"/>
                            Skype
                        </a>
                    </div>
                </div>
                <div className="socials">
                    <a href={CONTACTS.FACEBOOK}><i className="icon-facebook"/></a>
                    <a href={CONTACTS.TWITTER}><i className="icon-twitter"/></a>
                    <a href={CONTACTS.INSTA}><i className="icon-instagram"/></a>
                    <a href={CONTACTS.YOUTUBE}><i className="icon-youtube"/></a>
                </div>
            </div>
        )
    }
}

/*
 <a href="https://www.instagram.com/roman_brix/" target="_blank">
                            <div className="create">
                                &#169; Roman Brix
                            </div>
                        </a>
 */