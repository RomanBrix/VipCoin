import React, {Component} from 'react';
import { MAIN_TOP_VIDEO, BG_OPACITY_COIN } from '../../data/links';

export default class Top extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="top" style={ {backgroundImage: `url(${BG_OPACITY_COIN})`} }>
                    <div className="text">
                        <h1>{pages.head}</h1>
                        <p>{pages.text}</p>
                        <div className="btn-buy">{ pages.btn }</div>
                    </div>
                    <div className="video">
                        <iframe width="100%" height="250px" src={MAIN_TOP_VIDEO} frameBorder="0" allowFullScreen/>
                    </div>

            </div>
        )
    }
}
