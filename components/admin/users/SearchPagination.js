import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';

export default class SearchPagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 2
        }
    }
    handleSelect(eventKey) {
        const { step } = this.state;
        const { activatingPage } = this.props;
        activatingPage(eventKey, step);
    }
    render() {

        const { step } = this.state;
        // const { data, activePage } = this.props;
        const { activePage } = this.props;
        let data = ['','','','','','','','','','',];
        const item = Math.ceil( data.length / step);
        return (
            <div className="paga">
                <Pagination
                    bsSize="medium"
                    items={ item }
                    activePage={activePage}
                    onSelect={this.handleSelect.bind(this)} />
            </div>
        );
    }
}