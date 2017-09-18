import React, {Component} from 'react';
import Menu from "./Menu";
import Content from "./Content";

export default class Container extends Component {
    render(){
        const {
            user,
            coin_cost,
            coins_value,
            crypto,
            global_coin_cost
        } = this.props;
        console.log(user);
        return(
            <div className="content">
                    <Menu
                        user={ user }
                        global_coin_cost={ global_coin_cost }
                    />
                    <Content
                        coins_value={ coins_value }
                        coin_cost={ coin_cost }
                        crypto={ crypto }
                        user={ user }
                    />
            </div>
        )
    }
}
