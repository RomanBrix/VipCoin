import React, {Component} from 'react';
import TableItems from "./TableItems";
import SearchInput from "./SearchInput";
import SearchPagination from "./SearchPagination";

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            activePage: 1,
            step: 5
        }
    }
    componentWillReceiveProps(nextProps){
        const { users } = nextProps;
        if(users !== undefined) {
            this.setState({
                data: users
            });
        }
    }

    showNusers(num){

        this.setState({
            step: num
        })
    }

    find(value, type){
        const { users } = this.props;
        const searchQuery = value.toLowerCase();

        let display = users.filter((el)=>{
            let searchValue = el.login.toLowerCase();
            switch (type){
                case 0:
                    searchValue = el.login.toLowerCase();
                    break;
                case 1:
                    searchValue = el.hash.toLowerCase();
                    break;
                case 2:
                    searchValue = el.email.toLowerCase();
                    break;
            }
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            data: display,
            activePage: 1
        })
    }

    activatingPage(active){

        this.setState({
            activePage: active,
        })


    }
    render(){
        const { activePage, data, step } = this.state;

        return(
            <div className="container">
                <div className="content">
                    <h1>Users</h1>
                    <SearchInput find={ this.find.bind(this) } showNusers={ this.showNusers.bind(this) } />
                    <TableItems data={data} activePage={ activePage } step={step}/>
                    <SearchPagination
                        activePage={activePage}
                        activatingPage={this.activatingPage.bind(this)}
                        data={data}
                        step={step}
                    />
                </div>
            </div>
        )
    }
}
