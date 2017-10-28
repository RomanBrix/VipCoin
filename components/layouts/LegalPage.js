import React, {Component} from 'react';

export default class LegalPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            showLegal: false
        }
    }

    closeLegal(){
        this.setState({
            showLegal: false
        })
    }
    render(){
        const { closeWhitePaper, text } = this.props;

        const { showLegal } = this.state;

        return(
            <div className="whitePaper LegalPage" >
                <div className="fullscreen" onClick={()=>{ }}>

                    <h1>{text.head}</h1>
                    <h2>{text.corp}:  <span>IT BLOCKCHAIN DEVELOPMENT LLP</span></h2>
                    <h3>{text.adress}:  <span>3rd Floor, 86-90 Paul Street, London, United Kingdom, EC2A 4Ne</span></h3>
                    <div className="legalPhoto" onClick={(e)=>{
                        this.setState({
                            showLegal: true
                        });
                        e.stopPropagation();
                    }}>
                        <img src="./src/legalPhoto.png" alt="LegalPage" className="" />
                    </div>

                    <div className="back">
                        {text.back}
                    </div>
                </div>
                {
                    showLegal ?
                        <div className="showLegal">
                            <div className="exit" onClick={()=>{ this.closeLegal();closeWhitePaper() }}/>
                            <iframe src="./src/LegalPage.pdf" width="800" height="900"/>
                        </div> :
                        ""
                }

            </div>
        )
    }
}
