import React, {Component} from 'react';
import { CONTACTS } from '../../data/links';

export default class Top extends Component {
    render(){
        const { top } = this.props;
        return(
            <div className="services">
                <div className="left">
                    <a href={`tel:${CONTACTS.TELEPHONE}`}>
                        <i className="icon-phone-square"/>
                        +380-73-007-003-2
                    </a>
                    <a href={`skype:${CONTACTS.SKYPE}`}>
                        <i className="icon-skype"/>
                        Roma4Rock
                    </a>
                    <a href={`mailto:${CONTACTS.MAIL}`}>
                        <i className="icon-envelope"/>
                        StetcukRoman@gmail.com
                    </a>
                </div>
                <div className="center">
                    <h2>{ top.head }</h2>
                </div>
                <div className="right">
                    <div className="right-top">
                        <a href={CONTACTS.FACEBOOK}><i className="icon-facebook-alt"/></a>
                        <a href={CONTACTS.YOUTUBE}><i className="icon-youtube"/></a>
                    </div>
                    <div className="right-bottom">
                        <a href={CONTACTS.INSTA}><i className="icon-instagrem"/></a>
                        <a href={CONTACTS.TWITTER}><i className="icon-twitter-square"/></a>
                    </div>
                </div>
            </div>
        )
    }
}
