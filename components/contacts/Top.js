import React, {Component} from 'react';
import { CONTACTS } from '../../data/links';

export default class Top extends Component {
    render(){
        const { top } = this.props;
        return(
            <div className="services">
                {/*<h1>{top.head}</h1>*/}


                <div className="top-services">
                    <a href={`tel:${CONTACTS.TELEPHONE}`}>
                        <i className="icon-call-phone"/>
                        +380-11-111-11-11
                    </a>
                    <a href={`skype:${CONTACTS.SKYPE}`}>
                        <i className="icon-skype"/>
                        Skype
                    </a>
                    <a href={`mailto:${CONTACTS.MAIL}`}>
                        <i className="icon-mail"/>
                        test@gmail.com
                    </a>
                </div>
                <div className="bottom-services">
                    <a href={CONTACTS.FACEBOOK}><i className="icon-facebook"/></a>
                    <a href={CONTACTS.YOUTUBE}><i className="icon-youtube"/></a>
                    <a href={CONTACTS.INSTA}><i className="icon-instagram"/></a>
                    <a href={CONTACTS.TWITTER}><i className="icon-twitter"/></a>
                </div>
            </div>
        )
    }
}
