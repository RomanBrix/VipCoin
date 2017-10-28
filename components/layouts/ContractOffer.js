import React, {Component} from 'react';

export default class ContractOffer extends Component {
    render(){
        const { closeWhitePaper } = this.props;
        return(
            <div className="whitePaper" >
                <div className="exit" onClick={()=>{ closeWhitePaper() }}/>
                <iframe src="./src/ContractOffer.pdf" width="800" height="900"/>
            </div>
        )
    }
}
