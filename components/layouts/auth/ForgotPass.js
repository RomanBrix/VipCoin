import React, {Component} from 'react';

export default class ForgotPass extends Component {
    render(){
        const { forgot } = this.props;
        return(
            <div className="rendered-container">
                <p className="text">{forgot.text}</p>
                <div className="inputs">
                    <label htmlFor="email"><i className="icon-at"/></label>
                    <input type="email" name="email" id="email" placeholder={forgot.inputEmail}/>
                </div>
                <div className="btn-ok">{forgot.btnSend}</div>
            </div>
        )
    }
}
