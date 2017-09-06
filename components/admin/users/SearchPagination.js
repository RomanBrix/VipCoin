import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';

export default class SearchPagination extends Component {
    constructor(props){
        super(props);
    }
    handleSelect(eventKey) {
        const { step } = this.props;
        const { activatingPage } = this.props;
        activatingPage(eventKey, step);
    }
    render() {

        // const { step } = this.state;
        const { data, activePage, step } = this.props;
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