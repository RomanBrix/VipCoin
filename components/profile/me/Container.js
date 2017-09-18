import React, {Component} from 'react';
import Menu from "./Menu";
import Content from "./Content";

export default class Container extends Component {
    render(){
        const { coin_cost, coins_value, crypto } = this.props;
        return(
            <div className="content">
                    <Menu/>
                    <Content
                        coins_value={ coins_value }
                        coin_cost={ coin_cost }
                        crypto={ crypto }
                    />
            </div>
        )
    }
}
