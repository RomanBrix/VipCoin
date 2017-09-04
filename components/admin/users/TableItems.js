import React, {Component} from 'react';
import { Table } from "react-bootstrap";

export default class TableItems extends Component {

    render(){
        const { data, activePage } = this.props;
        const paginationContainer = data.filter((item, index)=>{
            let end = 10 * activePage;
            let start = end - 10;
            return index >= start && index < end;
        });
        const TRcontainer = paginationContainer.map((item, index)=>{
            return (
                <tr key={index} onDoubleClick={()=>{
                    const code = prompt("Введите код с комментария");
                    console.log(code);
                }}>
                <td>{item.id}</td>
                <td>{item.login}</td>
                <td>{item.email}</td>
                <td>{item.hash}</td>
                <td onDoubleClick={(event)=>{
                    const value = prompt("Количество монет?");
                    console.log(value);
                    event.stopPropagation();
                }}>{item.vipcoins_value}</td>
            </tr>
            )
        });


        return(
            <Table responsive hover striped >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя/login</th>
                        <th>E-mail</th>
                        <th>hash</th>
                        <th>VipCoins</th>
                    </tr>
                </thead>
                <tbody>
                    {TRcontainer}
                </tbody>
            </Table>
        )
    }
}
