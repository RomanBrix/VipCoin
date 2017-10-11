import React, {Component} from 'react';

export default class MiniProgress extends Component {
    render(){
        return(
            <div className="mini-progress">
                <div className="progresses">
                    <h1>Прогресс</h1>
                    <div className="develop">
                        <div className="bg"/>
                        <div className="title">DEVELOP</div>
                        <div className="points">first point</div>
                        <div className="points">second point</div>
                        <div className="points">heeey point</div>
                        <div className="points">one more point</div>
                        <div className="points">oops point</div>
                    </div>
                </div>
            </div>
        )
    }
}
