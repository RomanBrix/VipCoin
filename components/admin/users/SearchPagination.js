import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';

export default class SearchPagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 10
        }
    }
    handleSelect(eventKey) {
        const { step } = this.state;
        const { activatingPage } = this.props;
        activatingPage(eventKey, step);
    }
    render() {

        const { step } = this.state;
        const { data, activePage } = this.props;
        const item = Math.ceil( data.length / step);
        return (
            <div className="paga">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    bsSize="medium"
                    items={ item }
                    maxButtons={3}
                    activePage={activePage}
                    onSelect={this.handleSelect.bind(this)} />
            </div>
        );
    }
}