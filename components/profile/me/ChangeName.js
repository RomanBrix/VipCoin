import React, {Component} from 'react';

export default class ChangeName extends Component {

    sendUpdateData(){
        const {currentPass, newMail,} = this.refs;
        const{ updateSettings, hash } = this.props;
        updateSettings('', hash, currentPass.value, newMail.value);
    }

    render(){
        const { updated, nameSetting, user } = this.props;
console.log(user);

        let Place = "";
        if(user.name ==="none"){
            Place = nameSetting.nameInput;
        }else{
            Place = user.name;
        }

        return(
            <div className="change-mail">
                <h3>
                    <span className="stage">*</span> {nameSetting.head}:
                </h3>
                <div className="change">
                    {
                        updated === "changeEmailPassword" ?
                            <div className="error">{nameSetting.error}</div>
                            :
                            ""
                    }

                    <input type="text" placeholder={Place}/>
                    <div className="save" onClick={this.sendUpdateData.bind(this)}>
                        {nameSetting.save}
                    </div>
                    {
                        updated === "passwordChanged" ?
                            <div className="accept">{nameSetting.accept}</div>
                            :
                            ""
                    }
                </div>
            </div>

        )
    }
}
