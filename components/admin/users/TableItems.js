import React, {Component} from 'react';
import { Table } from "react-bootstrap";

export default class TableItems extends Component {
    render(){
        return(
            <Table responsive hover striped >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Имя/login</th>
                    <th>hash</th>
                    <th>VipCoins</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>14234</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>897345</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}
