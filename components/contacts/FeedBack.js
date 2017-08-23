import React, {Component} from 'react';

export default class FeedBack extends Component {
    render(){
        const { feedback } = this.props;
        return(
            <div className="FeedBack">
                <h1>{feedback.head}</h1>
                <div className="form-container">
                    <div className="left">
                        <input type="text" name="fname" id="fname" placeholder={feedback.inputName} ref="fname"/>
                        <input type="text" name="lname" id="lname" placeholder={feedback.inputLName} ref="lname"/>
                        <input type="email" name="email" id="email" placeholder={feedback.inputEmail} ref="email"/>
                    </div>
                    <div className="right">
                        <textarea name="message" placeholder={feedback.inputMsg} id="Message"/>
                    </div>
                </div>
                <div className="btn-send">
                    {feedback.btnSend}
                </div>
            </div>
        )
    }
}
