import React, {Component} from 'react';

export default class Answers extends Component {
    render(){
        const { pages } = this.props;

        const answersItems = pages.faqs.map((item, index)=>{
            return(
                <div className="answer" key={index} id={index}>
                    <h2>
                        <i className="icon-check-mark-circle-two"/> {item.title}
                    </h2>
                    <p>{item.text}</p>
                </div>
            )
        });

        return(
            <div className="answers">
                { answersItems }
            </div>
        )
    }
}
