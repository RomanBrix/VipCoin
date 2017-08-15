import React, {Component} from 'react';
import css from '../../css/scss/layouts/footer.scss';
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";
import { CONTACTS, PAGES } from '../../data/links';


export default class Footer extends Component {
    render(){
        const { footer } = this.props;
        return(
            <div className="footer">
                <div className="cont">
                    <div className="PP">
                       <ul>
                           <li>
                               <a href={PAGES.WHITE_PAGE}>
                                   <i className="icon-bitcoin-circle"/>
                                   {footer.pages.whitePage}
                               </a>
                           </li>
                            <li>

                                <a href={PAGES.LEGAL_PAGE}>
                                    <i className="icon-bitcoin-circle"/>
                                    {footer.pages.legalPage}
                                </a>
                            </li>
                            <li>
                                <a href={PAGES.CONTRACT_OFFER}>
                                    <i className="icon-bitcoin-circle"/>
                                    {footer.pages.contractOffer}
                                </a>
                            </li>
                       </ul>
                    </div>
                    <div className="feedback">
                        <a href={PAGES.CONTACT_US}>
                            <div className="btn">{footer.feedback}</div>
                        </a>
                        <a href="https://www.instagram.com/roman_brix/" target="_blank">
                            <div className="create">
                                &#169; Roman Brix
                            </div>
                        </a>
                    </div>
                    <div className="contacts">
                        <ul>
                            <li>
                                <a href={`tel:${CONTACTS.TELEPHONE}`}>
                                    <i className="icon-phone-square"/>
                                    +380-73-007-003-2
                                </a>
                            </li>
                            <li>
                                <a href={`skype:${CONTACTS.SKYPE}`}>
                                    <i className="icon-skype"/>
                                    Roma4Rock
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACTS.MAIL}`}>
                                    <i className="icon-envelope"/>
                                    StetcukRoman@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="socials">
                            <a href={CONTACTS.FACEBOOK}><i className="icon-facebook-alt"/></a>
                            <a href={CONTACTS.TWITTER}><i className="icon-twitter-square"/></a>
                            <a href={CONTACTS.INSTA}><i className="icon-instagrem"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
