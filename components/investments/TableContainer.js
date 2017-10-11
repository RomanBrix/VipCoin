import React, {Component} from 'react';

export default class TableContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: 10
        }
    }
    render(){
        const { pages, tableInvest } = this.props;
        const { show } = this.state;

        const tablecontent = tableInvest.map((item, index)=>{
            if(index < show) {
                return (
                    <tr key={index}>
                        <td>
                            {item.login}
                        </td>
                        <td>
                            {item.coins}
                        </td>
                        <td>
                            {item.insert_date}
                        </td>
                    </tr>
                )
            }
        });
        return(
            <div className="table-container">
                <h1>{ pages.head }</h1>
                <div className="table">
                    <table>
                        <thead>
                        <tr>
                            <th>{ pages.table.headFirst }</th>
                            <th>{ pages.table.headSecond }</th>
                            <th>{ pages.table.headThird }</th>
                        </tr>
                        </thead>
                        <tbody>
                            { tablecontent }
                            <tr>
                                <td colSpan={3} className="btn-more" onClick={()=>{

                                    if(show >=  tableInvest.length){
                                        window.location.href = "./packages.html"
                                    } else {
                                        this.setState({
                                            show: show + 10
                                        });
                                    }
                                }}>
                                    {
                                     show >=  tableInvest.length ?
                                         pages.table.btnEnd : pages.table.btnMore
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
