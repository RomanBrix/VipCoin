import React, {Component} from 'react';

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
                        <iframe  src="https://www.youtube.com/embed/RuZ80TPUF_A" height="100%" width="100%" frameBorder="0" allowFullScreen/>
                    </div>
                </div>
            </div>
        )
    }
}
