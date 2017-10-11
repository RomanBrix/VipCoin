import React, {Component} from 'react';

export default class ManualAddSell extends Component {
    render(){
        const { setManualSell } = this.props;
        return(
            <div className="option manualAdd">
            <label htmlFor="userSellCoins">Монет:</label>
                <input type="number" id="userSellCoins"/>
                <label htmlFor="userSellHash">Пользователь:</label>
                <select name="userSellHash" id="userSellHash">
                    <option value="3f13e6321368a270c5aeb2d0cf20f942">kolokol</option>
                    <option value="8a3211b9a9719644d63ce13d27361542">vanya</option>
                    <option value="8d2cbc8d3c5ead6d2611fa7bf5cf3bdd">okasd</option>
                    <option value="163e905060bad8436fd4dc916f659141">laskjf</option>
                    <option value="418ce1e666628c4b4cb34e61e7d84c81">romkaBrx</option>
                    <option value="0e79c7fd7b5ec9c49d694b5a27aa686d">host</option>
                    <option value="469ba660c323c4810349dc86abbe0f86">ivanPol777</option>
                    <option value="3f6d1cd34feb84ac972a7a15e8ff1027">Broot</option>
                    <option value="c48256f363ff716954c7502d60430f98">Aroot</option>
                </select>
                <div className="btn btn-save" onClick={()=>{
                    const select = document.getElementById("userSellHash");
                    const hash = select.options[select.selectedIndex].value;

                    const coins = document.getElementById('userSellCoins').value;
                    // console.log(hash, coins);
                    setManualSell("manualSetSell", hash, coins)
                }}>Добавить</div>
            </div>
        )
    }
}
