import React, {Component} from 'react';
import Content from './Content';
import Answers from "./Answers";

export default class FAQ extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="faq-container">
                <div className="faq">
                    <Content pages={ pages }/>
                    <Answers pages={ pages }/>
                </div>
            </div>
        )
    }
}
