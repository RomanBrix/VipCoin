import React, {Component} from 'react';

export default class WhitePaper extends Component {
    render(){
        const { closeWhitePaper } = this.props;
        return(
            <div className="whitePaper" >
                {/*<div className="close" onClick={()=>{ closeWhitePaper() }}>*/}
                    {/*<i className="icon-times-circle"/>*/}
                {/*</div>*/}
                {/*<h1>WhitePaper</h1>*/}
                <div className="exit" onClick={()=>{ closeWhitePaper() }}/>
                <iframe src="./src/whitePaper.pdf" width="800" height="900"/>
            </div>
        )
    }
}
