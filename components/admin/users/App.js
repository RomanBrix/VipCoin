import React, {Component} from 'react';
import FooterIcons from "../../../public/src/Fonts/FontsIcons/styles.css";
import Header from '../layouts/Header';
import Container from './Container';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.getCookie("user")
        };
        // if(this.state.user === undefined){
        //     window.location.href = '../index.html';
        // }else if(this.state.user.length < 15){
        //     window.location.href = '../index.html';
        // }

    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { hash,} = this.props;

        return (
            <div className="admin">
                <Header />
                <Container
                />
            </div>
        );
    }
};

