import React, {Component} from 'react';

export default class FeedBack extends Component {
    render(){
        const { feedback } = this.props;
        return(
            <div className="FeedBack">
                <div className="form-container">
                        <input type="text" name="fname" id="fname" placeholder={feedback.inputName} ref="fname"/>
                        <input type="text" name="lname" id="lname" placeholder={feedback.inputLName} ref="lname"/>
                        <input type="text" name="tel" id="tel" placeholder={feedback.inputTel} ref="tel"/>
                        <input type="email" name="email" id="email" placeholder={feedback.inputEmail} ref="email"/>
                        <textarea name="message" placeholder={feedback.inputMsg} id="Message"/>
                    <div className="btn-send">
                        {feedback.btnSend}
                    </div>
                </div>
            </div>
        )
    }
}
