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
        props.getPackages('getPackInfo');

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
        const {packages, updated} = this.props;

        return (
            <div className="admin">
                <Header />
                <Container
                    packages={ packages }
                    update={ this.setNewValueForPackage.bind(this) }
                    updated={ updated }
                />
            </div>
        );
    }
};

