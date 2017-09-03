import React, {Component} from 'react';
import TableItems from "./TableItems";
import SearchInput from "./SearchInput";
import SearchPagination from "./SearchPagination";

export default class NAME extends Component {
    constructor(props){
        super(props);
        this.state={
            activePage: 1,
        }
    }
    activatingPage(active){

        this.setState({
            activePage: active,
        })


    }
    render(){
        const { activePage } = this.state;
        return(
            <div className="container">
                <div className="content">
                    <h1>Users</h1>
                    <SearchInput/>
                    <TableItems/>
                    <SearchPagination activePage={activePage} activatingPage={this.activatingPage.bind(this)}/>
                </div>
            </div>
        )
    }
}
