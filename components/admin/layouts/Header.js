import React, {Component} from 'react';
import css from '../../../css/scss/admin/header.scss';

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="head"><h1>Admin Panel</h1></div>
                <div className="menu">
                    <a href="users.html">
                        <div className="">Пользователи</div>
                    </a>
                    <a href="packages.html">
                        <div className="" >
                             Пакеты
                        </div>
                    </a>
                    <a href="generally.html">
                        <div className="">
                         Основное
                        </div>
                    </a>
                    <a href="">
                        <div className="">
                            Новости
                        </div>
                    </a>
                </div>


                <div className="enter">
                    <div className="login" onClick={()=>{
                        document.cookie = 'hash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = 'name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = 'id=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        // window.location.href = 'index.html';
                    }}>
                        <i className="icon-power"/>Выйти
                    </div>
                </div>
            </div>
        );
    }
}
