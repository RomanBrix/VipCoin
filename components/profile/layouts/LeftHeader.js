import React, {Component} from 'react';
import { PROFILE_PAGES,LOGO } from "../../../data/links";

export default class LeftHeader extends Component {


    render() {
        const { head, user } = this.props;
        console.log(user );

        const login = user.map((item,index) =>{
            console.log(item);
            return <div className="hello" key={index}>
                Hello, {item.login}
            </div>
        });
        console.log(login);
        return (
            <div className="left-header">
                <div className="logo">
                    <img src={`.${LOGO}`} alt="logo"/>
                </div>
                {login}
                <div className="menu">
                    <a href={PROFILE_PAGES.MAIN}>
                        {head.btnMain}
                    </a>
                    <a href={PROFILE_PAGES.INFO}>
                        {head.btnInfo}
                    </a>
                    <a href={PROFILE_PAGES.REFILL}>
                        {head.btnRefill}
                    </a>
                    <a href={PROFILE_PAGES.SETTINGS}>
                        {head.btnSettings}
                    </a>
                </div>
                <div className="exit" onClick={()=>{
                    document.cookie= "user=1; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                    setTimeout(()=>{
                        window.location.href = '../index.html';
                    },200)

                }}>
                    <i className="icon-power"/> {head.btnExit}
                </div>

                <div className="socials">
                    <i className="icon-youtube"/>
                    <i className="icon-twitter-square"/>
                    <i className="icon-instagrem"/>
                    <i className="icon-facebook-alt"/>
                </div>
            </div>
        )
    }
};
