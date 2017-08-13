import React, {Component} from 'react';

export default class Progress extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="progress">
                <h1> {pages.head}</h1>
            </div>
        )
    }
}
