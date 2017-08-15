import React, {Component} from 'react';
import Login from "./login";
import Regstration from "./registration";
import css from "../../../css/scss/layouts/auth.scss";

export default class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle: true
        }
    }

    render(){
        const { toggle } = this.state;
        const { auth } = this.props;
        console.log( auth );
        return(
            <div className="auth">
                <div className="auth-head">
                    <div className="btn btn-login" onClick={()=>{this.setState({toggle:true})}}>
                        {auth.header.btnLogin}
                        <span className="under">
                            {auth.header.underLogin}
                        </span>
                    </div>
                    <div className="btn btn-registration" onClick={()=>{this.setState({toggle:false})}}>
                        {auth.header.btnRegistration}
                        <span className="under">
                            {auth.header.underRegistration}
                        </span>
                    </div>
                </div>
                <div className="auth-container">
                    {toggle ?
                        <Login/> :
                        <Regstration/>
                    }
                </div>
            </div>
        )
    }
}
