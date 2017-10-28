import React, {Component} from 'react';

export default class SellPolicy extends Component {
    render(){
        const { closeWhitePaper } = this.props;
        return(
            <div className="whitePaper" >
                <div className="exit" onClick={()=>{ closeWhitePaper() }}/>
                <iframe src="./src/SellPolicy.pdf" width="800" height="900"/>
            </div>
        )
    }
}
