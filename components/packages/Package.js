import React, {Component} from 'react';
import FooterIcons from "../../public/src/Fonts/FontsIcons/styles.css";

export default class Package extends Component {
    render(){
        const { packages } = this.props;
        const colors = ["#fafad2", "#ee82ee", "#64b7e1","#f4a460","#d3d3d3", "#e5c100"];
        const packageContainer = packages[0].map((item, index)=>{
            let logos = [];
            for(let i = 0; i <= index; i++){
                logos.push(<i className="icon-bitcoin-circle" key={i* Math.random(100)}/>);
            }
            return <div className="package" key={ index } style={{boxShadow : `0 0 10px 1px${colors[index]}`, borderColor: `${colors[index]}`, color: `${colors[index]}`  }}>
                    <div className="package_logo" style={{color: `${colors[index]}`}}>
                        {/*{logos}*/}
                        <i className="icon-bitcoin-circle"/>
                    </div>
                    <h3>{item.title}</h3>
                    <div className="options">
                       <span className="getCoins">
                           <i className="icon-bitcoin-circle"/>  { item.option.coins }
                        </span>
                    </div>
                    <div className="btn btn_buy" style={{}}>
                        <i className="icon-usd"/>
                        {item.price}
                    </div>
                </div>
        });
        return(
            <div className="packages">
                <h1>{packages[1][0].title}</h1>
                <div className="all_packages">
                    { packageContainer }
                </div>
            </div>
        )
    }
}
