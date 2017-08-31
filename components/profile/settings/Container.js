import React, {Component} from 'react';
import ChangePassword from "./ChangePassword";
import  ChangeEmail from "./ChangeEmail";

export default class Container extends Component {
    render(){
        const {settings, hash, updateSettings, updated} = this.props;
        return(
            <div className="content">
                <ChangePassword
                    passSetting={ settings.password }
                    updateSettings={updateSettings}
                    updated={updated}
                    hash={ hash }
                />
                <ChangeEmail
                    emailSetting={ settings.email }
                    updateSettings={updateSettings}
                    updated={ updated }
                    hash={ hash }
                />
            </div>
        )
    }
}
