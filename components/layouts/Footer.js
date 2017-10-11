import React, {Component} from 'react';
import css from '../../css/scss/layouts/footer.scss';
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
import { CONTACTS, PAGES } from '../../data/links';
import { FOOTER_BG } from '../../data/links';
import WhitePaper from "./WhitePaper";



export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleWhitePaper: false
        }
    }
    closeWhitePaper(){
        this.setState({
            toggleWhitePaper: false
        })
    }
    render(){
        const { footer, profile } = this.props;
        const { toggleWhitePaper } = this.state;

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
                                   body.style.overflow = "hidden";
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

                                <a href={PAGES.LEGAL_PAGE}>
                                    {footer.pages.legalPage}
                                </a>
                            </li>
                            <li>
                                <a href={PAGES.CONTRACT_OFFER}>
                                    {footer.pages.contractOffer}
                                </a>
                            </li>
                           <li>
                               <a href={PAGES.CONFIDENTIALITY}>
                                   { footer.pages.confidentiality }
                               </a>
                           </li>
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