import React, {Component} from 'react';
import Top from './Top';
import Progress from './Progress';
import TableSplits from "./TableSplits";
import MiniProgress from "./MiniProgress";


export default class Container extends Component {
    render(){
        const { pages, maxCoins, soldCoins } = this.props;

        return(
            <div className="content">
                <Top pages={ pages.top } />
                <Progress
                    pages={ pages.progress }
                    maxCoins={ maxCoins }
                    soldCoins={ soldCoins }
                />
                <MiniProgress/>
                <TableSplits info={ pages.table }/>
            </div>
        )
    }
}
