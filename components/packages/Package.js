import React, {Component} from 'react';
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";

export default class Package extends Component {
    updatePackage(id, cost, type){
        const range = eval("this.refs.rangeCoins"+id);
        const coins = eval("this.refs.valueCoins"+id);
        const price = eval("this.refs.priceCoins"+id);
        if(type){
            coins.value = +range.value;
            price.innerHTML = (cost * coins.value).toFixed(2);
        }else{
            let trueValue = 0;
            if(+coins.max < 100000 ) {
                +coins.value > +coins.max ? trueValue = coins.max : trueValue = coins.value;
                range.value = trueValue;
                coins.value = trueValue;
                +coins.value < +coins.min ? coins.value = coins.min : coins.value;
                if(coins.value % 10 === 0) {
                    price.innerHTML = (cost * coins.value).toFixed(0);
                }else{
                    price.innerHTML = (cost * coins.value).toFixed(2);
                }
            }else{
                +coins.value > +coins.max ? trueValue = coins.max : trueValue = coins.value;
                coins.value = trueValue;
                +coins.value < +coins.min ? coins.value = coins.min : coins.value;
                if(coins.value % 10 === 0) {
                    price.innerHTML = (cost * coins.value).toFixed(0);
                }else{
                    price.innerHTML = (cost * coins.value).toFixed(1);
                }
            }
        }

    }
    render(){
        const { packages, package_title } = this.props;
        const colors = ['#f2b01e','#ccc2c2','#f2b01e','#e5c100','#b9f2ff'];
        const logo = ["icon-star", "icon-ribbon-a", "icon-trophy","icon-crown-king-1","icon-diamond"];
        const packageContainer = packages.map((item, index)=>{
            const minimum = +item.minCoins;
            const rand = Math.floor(Math.random() * 600) + 100
            return <div className="package" key={ index } onClick={({target})=>{
                     if(target.classList[0] === "package"){
                         window.location.href = "#";
                     }
            }}>
                    <div className="package_logo" style={{color: colors[index]}}>
                        <i className={logo[index]}/>
                    </div>
                    <h3>{item.name}</h3>
                    <div className="options">
                       <span className="getCoins">
                           <label htmlFor={`valueCoins${index}`}>
                               <i className="icon-bitcoin-circle"/>
                           </label>
                           <input
                               type="number"
                               ref={`valueCoins${index}`}
                               defaultValue={minimum + rand}
                               max={item.maxCoins}
                               min={item.minCoins}
                               id={`valueCoins${index}`}
                               onBlur={()=>{ this.updatePackage(`${index}`, item.oneCoinCost, false)}}
                               step={25}
                           />
                        </span>
                    </div>
                    <div className="summ">
                        <div className="one-price">
                            <p>for 1 VipCoin</p>
                            <i className="icon-usd"/>
                            { item.oneCoinCost }
                        </div>
                        <div className="all_price">
                            <p>for all VipCoins</p>
                            <i className="icon-usd"/>
                            <span className="price" ref={`priceCoins${index}`}>
                                {(item.oneCoinCost *(minimum + rand)).toFixed(2)}
                            </span>
                        </div>
                    </div>
                {index !== 4 ? <input
                    type="range"
                    min={item.minCoins}
                    max={item.maxCoins}
                    ref={`rangeCoins${index}`}
                    defaultValue={minimum + rand}
                    className="coins-range"
                    onChange={()=>{ this.updatePackage(`${index}`, item.oneCoinCost, true)}}
                />: <p>unlimited</p>}
                </div>
        });
        return(
            <div className="packages">
                <h1>{package_title.title}</h1>
                <div className="all_packages">
                    <div className="top">
                        { packageContainer[0] }
                        { packageContainer[1] }
                    </div>
                    <div className="center">
                        { packageContainer[4] }
                    </div>
                    <div className="bottom">
                        { packageContainer[2]}
                        { packageContainer[3] }
                    </div>
                </div>
            </div>
        )
    }
}
