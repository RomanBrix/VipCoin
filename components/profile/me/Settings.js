import React, {Component} from 'react';
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import ChangeName from "./ChangeName";

export default class Settings extends Component {
        render(){
            const {
                updateSettings,
                settingsPage,
                updated,
                hash,
                user
            } = this.props;
            return(
                <div className="content-box">
                    <ChangeName
                        nameSetting={ settingsPage.name }
                        updateSettings={updateSettings}
                        updated={updated}
                        hash={ hash }
                        user={ user }
                    />
                    <ChangePassword
                        passSetting={ settingsPage.password }
                        updateSettings={updateSettings}
                        updated={updated}
                        hash={ hash }
                    />
                    <ChangeEmail
                        emailSetting={ settingsPage.email }
                        updateSettings={updateSettings}
                        updated={ updated }
                        hash={ hash }
                    />
                </div>
                )
        }
}
