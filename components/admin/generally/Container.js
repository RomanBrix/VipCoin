import React, {Component} from 'react';

export default class Container extends Component {
    goAlert(text,isOk){
        const pushAlert = document.getElementById("alert");
        pushAlert.innerHTML = text;
        if(isOk) {
            pushAlert.style.backgroundColor =  "greenyellow";
        }else{
            pushAlert.style.backgroundColor =  "red";
        }

        pushAlert.style.display = "block";
        pushAlert.style.opacity = 1;

        setTimeout(()=>{
            pushAlert.style.opacity = 0;
        }, 300);
        setTimeout(()=>{
            pushAlert.style.display = "none";
        }, 1700);

    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <h1> Основное </h1>
                    <div className="options-container">
                        <div className="option oneСoin">
                            <label htmlFor="oneCost">Цена за одну монету</label>
                            <input type="number" id="oneCost" ref="oneCost"/>
                            <div className="btn btn-save">Сохранить</div>
                        </div>
                        <div className="option allCoins">
                            <label htmlFor="allCoins">Всего монет в наличии</label>
                            <input type="number" id="allCoins" ref="allCoins"/>
                            <div className="btn btn-save">Сохранить</div>
                        </div>
                        <div className="option sold">
                            <label htmlFor="totalSold">Всего монет Продано</label>
                            <input type="number" id="totalSold" ref="totalSold"/>
                            <div className="btn reload" onClick={()=>{
                                this.goAlert("FAAALSE", false);
                            }}>Обновить</div>
                            <div className="btn btn-save" onClick={()=>{
                                this.goAlert("OKay", true);
                            }}>Сохранить</div>
                        </div>
                        <div id="alert">
                            Сохранено!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
