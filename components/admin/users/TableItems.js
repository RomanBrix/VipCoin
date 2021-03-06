import React, {Component} from 'react';
import { Table } from "react-bootstrap";

export default class TableItems extends Component {
    constructor(props){
        super(props);
        this.state={
            sorted: true
        }
    }
    compareNumericTrue(a, b) {
        if (+a.vipcoins_value > +b.vipcoins_value) return -1;
        if (+a.vipcoins_value < +b.vipcoins_value) return 1;
    }
    compareNumericFalse(a, b) {
        if (+a.vipcoins_value > +b.vipcoins_value) return 1;
        if (+a.vipcoins_value < +b.vipcoins_value) return -1;
    }
    render(){
        const { data, activePage, step, addCoins } = this.props;
        const { sorted } = this.state;


        let sortedData = [];
        sorted ? sortedData = data.sort(this.compareNumericTrue) : sortedData = data.sort(this.compareNumericFalse);

        const paginationContainer = sortedData.filter((item, index)=>{
            let end = step * activePage;
            let start = end - step;
            return index >= start && index < end;
        });

        const TRcontainer = paginationContainer.map((item, index)=>{
            return (
                <tr key={index}
                    onDoubleClick={()=>{
                        const code = prompt("Введите код с комментария");
                        addCoins(item.hash,code);}}
                >
                    <td>{item.id}</td>
                    <td>{item.login}</td>
                    <td>{item.email}</td>
                    <td>{item.hash}</td>
                    {
                        item.name === "none" ?
                            <td>Не указано</td> :
                            <td>{item.name}</td>
                    }

                    {
                        item.tel == 0 ?
                            <td>Не указано</td> :
                            <td>{item.tel}</td>
                    }

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
                        <th>login</th>
                        <th>E-mail</th>
                        <th>hash</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th onClick={()=>{
                            const { sorted } = this.state;
                            this.setState({
                                sorted: !sorted
                            })
                        }}>VipCoins</th>
                    </tr>
                </thead>
                <tbody>
                    {TRcontainer}
                </tbody>
            </Table>
        )
    }
}
