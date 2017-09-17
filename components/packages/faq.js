import React, {Component} from 'react';

export default class Faq extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="faq">
                <div className="faq-container">
                    <h1>{pages.title}</h1>
                    <p className="afterHead">{pages.afterHead}</p>
                    <div className="faqs">
                        <div className="one-faq">
                            <h3><a href="./faq.html#1"><i className="icon-check-mark-circle-two"/> {pages.help1.title}</a></h3>
                            <p>{pages.help1.text}... </p>
                        </div>
                        <div className="one-faq">
                            <h3>
                                <a href="./faq.html#3">
                                    <i className="icon-check-mark-circle-two"/> {pages.help2.title}
                                </a>
                            </h3>
                            <p>{pages.help2.text}... </p>
                        </div>
                        <div className="one-faq">
                            <h3>
                                <a href="./faq.html#5">
                                    <i className="icon-check-mark-circle-two"/> {pages.help3.title}
                                </a>
                            </h3>
                            <p>{pages.help3.text}... </p>
                        </div>
                        <div className="one-faq">
                            <h3>
                                <a href="./faq.html#7">
                                    <i className="icon-check-mark-circle-two"/> {pages.help4.title}
                                </a>
                            </h3>
                            <p>{pages.help4.text}... </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
