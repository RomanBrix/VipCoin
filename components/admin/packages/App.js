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
        props.getPackages('getPackInfo');

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            adminUser: this.getCookie("admin_user")
        })
    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }


    setNewValueForPackage(id){
        const { setNewPackVal } =this.props;

        const packName = document.getElementById(`packName${id}`);
        const packCost = document.getElementById(`packCost${id}`);


        const end = document.getElementById(`end${id}`);
        const start = document.getElementById(`start${id}`);
        const wait = document.getElementById(`wait${id}`);


        let status = "";
        const arr = [end, start, wait];
        for(let i = 0; i < 3; i++){
            if(arr[i].checked === true){
                status = arr[i].value;
            }
        }

        setNewPackVal("setNewPackVal", id, packName.value, packCost.value, status);
    }

    render(){
        const {reduxAdminUser, packages, updated} = this.props;
        const {adminUser} = this.state;
        return (
            <div className="admin">
                <Header />
                {(adminUser && reduxAdminUser === "HelloAdmin") || (adminUser === reduxAdminUser) ?
                    <Container
                        packages={packages}
                        update={this.setNewValueForPackage.bind(this)}
                        updated={updated}
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

