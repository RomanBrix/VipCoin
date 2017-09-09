import React, {Component} from 'react';
import {
    LOGO
} from '../../data/links';
export default class TableSplits extends Component {
    render(){
        const { info } = this.props;
        const { head, foot, split } = info;
        const cont = split.map((item, index) =>{
            return (
                <tr key={ index + 1}>
                    <td>
                        { index + 1 }
                    </td>
                    <td>
                        { item.cost }
                    </td>
                    <td>
                        { item.value }
                    </td>
                    <td>
                        { item.summ }
                    </td>
                </tr>
            )
        });
        return(
            <div className="tableSplit">
                <h2>{head.header}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>{ head.number }</th>
                            <th>{ head.cost }</th>
                            <th>{ head.value }</th>
                            <th>{ head.summ }</th>
                        </tr>
                    </thead>
                    <tbody>
                    { cont }
                    </tbody>
                </table>
                <div className="end">
                    <div className="allSumm">{ foot.allSumm } <span>306.900.000</span></div>
                    <div className="future">{ foot.future } <img src={LOGO} alt=""/> <span>= { foot.coinCost} </span></div>
                </div>
            </div>
        )
    }
}
