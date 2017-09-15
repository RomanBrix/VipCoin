import React, {Component} from 'react';

export default class Package extends Component {

    inputBlur(target, cost, coins, id){

        // console.log(target.value, cost);
        if(+target.value > +coins){
            target.value = coins;
        }
        const costCont = document.getElementById(id);
        let end = 0;
        (+target.value * cost) % 1 === 0 ? end = (+target.value * cost) : end = (+target.value * cost).toFixed(2);
        console.log(((+target.value * cost) % 1));
        costCont.innerHTML =  end + " $";


    }

    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { packages, package_title, toggleAuth } = this.props;
        const user = this.getCookie("user");
        console.log(user);
        const packages_map = packages.map((item, index)=>{
            let btn = "";
            if(item.status === "end"){
                btn = "НЕДОСТУПНО";
            }else if(item.status === "start"){
                btn = "КУПИТЬ";
            }else{
                btn = "В ОЖИДАНИИ";
            }
            const rand = Math.floor(Math.random() * 1200) + 100;

            return(
                <div className={`package ${item.status}`} key={index}>
                    <div className="top">
                        <h3>{item.name}</h3>
                        <p>$ <span className="cost">{item.cost}</span>/монету</p>
                    </div>
                    <div className="bottom">
                        <div className="coins_left">
                            <p>Доступно монет:</p>
                            <span id="coins_left">
                                {item.coins}
                            </span>
                        </div>
                        <div className="inputCoins">
                            <p>
                                Введите количество
                                монет для покупки:
                            </p>
                            { item.status === "end" ?
                                <input type="number" defaultValue={0} max={item.coins} disabled/>
                                :
                                <input
                                    type="number"
                                    defaultValue={rand}
                                    max={item.coins}
                                    onBlur={({target})=>{
                                        this.inputBlur(target, item.cost, item.coins, `price${index}`)
                                    }}
                                />
                            }
                                </div>
                        <div className="price">
                            <p>Стоимость:</p>
                            <span className="spanPrice" id={`price${index}`}>
                                {
                                    item.status === "end"
                                    ? 0
                                    : (rand * item.cost).toFixed(2)
                                } $
                                </span>
                            {
                                item.status !== "start"
                                    ? <div className="btn-buy">
                                        { btn }
                                      </div>
                                    : <div
                                        className="btn-buy"
                                        onClick={()=>{
                                            if(user === undefined || user.length < 15){
                                                toggleAuth(true);
                                            } else{
                                                window.location.href = 'profile/me.html';
                                            }
                                        }}>
                                        { btn }
                                      </div>
                            }
                        </div>


                    </div>
                </div>
            )
        });
        return(
            <div className="packages">

                <div className="packages-container">
                    <h1>{package_title.title}</h1>
                    <p className="afterHead">Укажите количество монет которые хотите купить
                        для расчета стоимость</p>
                    <div className="pack-map">
                        { packages_map }
                    </div>
                </div>
            </div>
        )
    }
}
