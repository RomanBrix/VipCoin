import React, {Component} from 'react';
import Package from "./Package";
// import Calculator from './Calculator';
import Faq from './Faq';

export default class Container extends Component {
    render(){
        const { pages, packages, toggleAuth } = this.props;

        return(
            <div className="content">
                <Package
                    package_title={ pages.packages[0] }
                    packages={ packages }
                    toggleAuth={ toggleAuth }
                />
                <Faq/>
                {/*<Calculator*/}
                    {/*calculate_title={ pages.packages[1]}*/}
                    {/*// packages={ pages.packages[0]}*/}
                    {/*packages={ packages }*/}
                {/*/>*/}
            </div>
        )
    }
}
