import React, {Component} from 'react';
import { BG_OPACITY_COIN } from '../../data/links';

export default class Top extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="top" style={ {backgroundImage: `url(${BG_OPACITY_COIN})`} }>
                <div className="text">
                    <h1>{pages.head}</h1>
                    <p>{pages.body}</p>
                </div>
            </div>
        )
    }
}
