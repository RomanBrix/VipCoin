import React, {Component} from 'react';

export default class Refill extends Component {
    render(){
        const { packages } = this.props;
        console.log(packages);


        const colors = ['#f2b01e','#ccc2c2','#f2b01e','#e5c100','#b9f2ff'];
        const logo = ["icon-star", "icon-ribbon-a", "icon-trophy","icon-crown-king-1","icon-diamond"];
        const packageContainer = packages.map((item, index)=>{
            return (
                <div
                    id={`logo${index}`}
                    key={index}
                    style={{color: colors[index]}}
                    className={index === 0 ? "check-package active-package": "check-package"}
                    data-min={+item.minCoins}
                    data-max={+item.maxCoins}
                    data-cost={+item.oneCoinCost}
                >

                    <i className={logo[index]}/>
                    <p>{item.name}</p>
                </div>
            )
        });

        return(
            <div className="refill">
                <h1>КУПИТЬ</h1>
                <div className="refill-container">
                    <div className="packages">
                        { packageContainer }
                    </div>
                </div>
            </div>

        )

    }
}
