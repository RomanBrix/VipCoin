import React, {Component} from 'react';
import { MAIN_TOP_VIDEO } from '../../data/links';

export default class Top extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="top">
                <div className="right">
                    <div className="text">
                        <h1>{pages.head}</h1>
                        <p>{pages.text}</p>
                    </div>
                    <div className="video">
                        {/*<iframe  src="https://www.youtube.com/embed/RuZ80TPUF_A" height="100%" width="100%" frameBorder="0" allowFullScreen/>*/}
                        <iframe width="100%" height="100%" src={MAIN_TOP_VIDEO} frameBorder="0" allowFullScreen/>
                    </div>
                </div>
            </div>
        )
    }
}
