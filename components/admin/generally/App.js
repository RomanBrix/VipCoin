import React, {Component} from 'react';
import FooterIcons from "../../../public/src/Fonts/FontsIcons/styles.css";
import Header from '../layouts/Header';
import Container from './Container';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.getCookie("user"),
            adminUser: this.getCookie("admin_user")

        };
        // if(this.state.user === undefined){
        //     window.location.href = '../index.html';
        // }else if(this.state.user.length < 15){
        //     window.location.href = '../index.html';
        // }

        props.getAdminUser("@secret?Code/For|Admin\\UserCheck@",this.state.adminUser);
        props.getGenInfo("getInfo");
    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { reduxAdminUser, hash, generallyInfo, setGenerally, updated, getGenInfo} = this.props;
        const {adminUser} = this.state;

        return (
            <div className="admin">
                <Header />
                {(adminUser && reduxAdminUser === "HelloAdmin") || (adminUser === reduxAdminUser) ?
                    <Container
                        generallyInfo={generallyInfo}
                        setGenerally={setGenerally}
                        updated={updated}
                        getGenInfo={getGenInfo}
                    />
                    :
                    <div className="admin-enter">
                        <h2>Ввойдите:</h2>
                        <input type="text" ref="enterLog" placeholder="Login"/>
                        <input type="password" ref="enterPass"/>
                        <div className="btn-enter" onClick={() => {
                            const {enterLog, enterPass} = this.refs;
                            const {getAdminUser} = this.props;
                            getAdminUser("@secret?Code/For|Admin\\User@", enterLog.value, enterPass.value);
                        }}>
                            Ввойти
                        </div>
                    </div>
                }
            </div>
        );
    }
};

