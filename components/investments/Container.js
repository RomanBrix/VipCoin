import React, {Component} from 'react';
import TableContainer from "./TableContainer";


export default class Container extends Component {
    render(){
        const { pages, tableInvest } = this.props;

        return(
            <div className="content">
                <div className="invest">
                    <TableContainer pages={ pages } tableInvest={ tableInvest }/>
                </div>
            </div>
        )
    }
}
