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

    componentWillReceiveProps(nextProps){

        const { generallyInfo } = nextProps;
        const { oneCost, allCoins, totalSold  } = this.refs;

        oneCost.value = generallyInfo.costOfOneCoin;
        allCoins.value = generallyInfo.maxCoinsHave;
        totalSold.value = generallyInfo.totalSold;

    }
    render() {
        const { setGenerally, updated, getGenInfo} = this.props;

        if(updated ==="newCostOk" || updated === "newTotalSoldOk" || updated === "newCoinsCountOk"){
            this.goAlert("СОХРАНЕНО",true);
        }else if(updated ===false){
            this.goAlert("НЕ СОХРАНЕНО", false);
        }

        return (
            <div className="container">
                <div className="content">
                    <h1> Основное </h1>
                    <div className="options-container">
                        <div className="option oneСoin">
                            <label htmlFor="oneCost">Цена за одну монету</label>
                            <input
                                type="number"
                                id="oneCost"
                                ref="oneCost"
                            />
                            <div
                                className="btn btn-save"
                                onClick={()=>{
                                    const { oneCost } = this.refs;
                                    setGenerally("OneCost", oneCost.value);
                                    setTimeout(()=>{
                                        getGenInfo("getInfo");
                                    }, 100);

                                }}
                            >Сохранить</div>
                        </div>
                        <div className="option allCoins">
                            <label htmlFor="allCoins">Всего монет в наличии</label>
                            <input
                                type="number"
                                id="allCoins"
                                ref="allCoins"
                                // defaultValue={ generallyInfo.maxCoinsHave }
                            />
                            <div className="btn btn-save" onClick={()=>{
                                const { allCoins } = this.refs;
                                setGenerally("AllCoins", allCoins.value);
                                setTimeout(()=>{
                                    getGenInfo("getInfo");
                                }, 100);
                            }}>Сохранить</div>
                        </div>
                        <div className="option sold">
                            <label htmlFor="totalSold">Всего монет Продано</label>
                            <input
                                type="number"
                                id="totalSold"
                                ref="totalSold"
                            />
                            <div className="btn reload" onClick={()=>{
                                if(confirm('Подсчитать точное значение?')) {
                                    setGenerally("RefreshTotalSold", 1);
                                    setTimeout(() => {
                                        getGenInfo("getInfo");
                                    }, 100);
                                }
                            }}>Обновить</div>
                            <div className="btn btn-save" onClick={()=>{
                                const { totalSold } = this.refs;
                                setGenerally("TotalSold", totalSold.value);
                                setTimeout(()=>{
                                    getGenInfo("getInfo");
                                }, 100);
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
