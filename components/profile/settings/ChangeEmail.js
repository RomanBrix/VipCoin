import React, {Component} from 'react';

export default class ChangeEmail extends Component {
    sendUpdateData(){
        const {currentPass, newMail,} = this.refs;
        const{ updateSettings, hash } = this.props;
            updateSettings('changeEmail', hash, currentPass.value, newMail.value);
    }

    render(){
        const { emailSetting, updated } = this.props;
        return(
            <div className="change-mail">
                <h1>{emailSetting.head}</h1>
                <div className="change">
                    {
                        updated === "changeEmailPassword" ?
                            <span className="error">{emailSetting.error}</span>
                            :
                            ""
                    }
                    {
                        updated === "changeEmail" ?
                            <span className="error">{emailSetting.secondError}</span>
                            :
                            ""
                    }
                    <div className="form">
                        <div>
                            <label htmlFor="currentPass">{emailSetting.CurPass}</label>
                            <input type="password" ref="currentPass" id="currentPass"/>
                        </div>
                        <div>
                            <label htmlFor="newMail">{emailSetting.new}</label>
                            <input type="email" ref="newMail" id="newMail"/>
                        </div>
                    </div>
                    <div className="save" onClick={this.sendUpdateData.bind(this)}>
                        {emailSetting.save}
                    </div>
                    {
                        updated === "emailChanged" ?
                            <span className="accept">{emailSetting.accept}</span>
                            :
                            ""
                    }
                </div>
            </div>
        )
    }
}
