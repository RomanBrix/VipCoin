import React, {Component} from 'react';
import FAQ from './Faq';

export default class Container extends Component {
    render(){
        const { pages } = this.props;

        return(
            <div className="content">
                <FAQ pages={pages}/>
            </div>
        )
    }
}
