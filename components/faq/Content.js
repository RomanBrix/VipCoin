import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        const { pages } = this.props;
        const fastContentItems = pages.faqs.map((item, index)=>{
            return(
                <a href={`#${index}`} key={index}>
                    <i className="icon-check-mark-circle-two"/>{item.title}
                </a>
            )
        });
        return(
            <div className="fastContent">
                <h1>{pages.content.title}</h1>
                <p className="afterHead">{pages.content.afterHead}</p>
                <div className="fastContent-items">
                    <div className="urls">
                        {fastContentItems}
                    </div>
                </div>
            </div>
        )
    }
}
