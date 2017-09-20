import React, {Component} from 'react';
import Menu from "./Menu";
import Content from "./Content";
import Settings from "./Settings";

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            settings: false
        }
    }

    switchSettings(){
        const { settings } = this.state;
        this.setState({
            settings: !settings
        })
    }
    render(){
        const {
            user,
            coin_cost,
            coins_value,
            crypto,
            global_coin_cost,


            settingsPage,
            updateSettings,
            updated,
            hash
        } = this.props;
        const { settings } = this.state;

        return(
            <div className="content">
                <Menu
                    user={ user }
                    global_coin_cost={ global_coin_cost }
                    switchSettings={ this.switchSettings.bind(this)}
                />
                {   !settings ?
                    <Content
                        coins_value={coins_value}
                        coin_cost={coin_cost}
                        crypto={crypto}
                        user={user}
                    />
                    :
                    < Settings
                        settingsPage={ settingsPage }
                        updateSettings={ updateSettings }
                        updated={ updated }
                        hash={ hash }
                        user={user}
                    />
                }
            </div>
        )
    }
}
