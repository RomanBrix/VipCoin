import React, {Component} from 'react';

export default class ChangePassword extends Component {
    sendUpdateData(){
        const {currentPass, newPass, rePass} = this.refs;
        if(newPass.value === rePass.value){
            const{ updateSettings, hash } = this.props;
            updateSettings('changePassword', hash, currentPass.value, newPass.value);
        }
    }
    render(){
        const{ passSetting, updated } = this.props;
        return(
            <div className="change-password">
                <h1>{passSetting.head}</h1>
                <div className="change">
                    {
                        updated === "changePassword" ?
                            <span className="error">{passSetting.error}</span>
                            :
                            ""
                    }
                    <div className="form">
                        <div>
                            <label htmlFor="currentPass">{passSetting.CurPass}</label>
                            <input type="password" ref="currentPass" id="currentPass"/>
                        </div>
                        <div>
                            <label htmlFor="newPass">{passSetting.new}</label>
                            <input type="password" ref="newPass" id="newPass"/>
                        </div>
                        <div>
                            <label htmlFor="rePass">{passSetting.repass}</label>
                            <input type="password" ref="rePass" id="rePass"/>
                        </div>
                    </div>
                    <div className="save" onClick={this.sendUpdateData.bind(this)}>
                        {passSetting.save}
                    </div>
                    {
                        updated === "passwordChanged" ?
                            <span className="accept">{passSetting.accept}</span>
                            :
                            ""
                    }
                </div>
            </div>
        )
    }
}
