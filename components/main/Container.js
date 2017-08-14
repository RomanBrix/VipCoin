import React, {Component} from 'react';
import FontBitCoin from "../../public/src/main/FontBitcoin/styles.css";
import Top from './Top';
import Progress from './Progress';
import Package from "./Package";

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <Top pages={ pages.top }/>
                <Progress pages={ pages.progress }/>
                <Package packages={ pages.packages}/>
            </div>
        )
    }
}
