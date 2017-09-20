import React, {Component} from 'react';

export default class ChangeTel extends Component {

    sendUpdateData(){
        const {newTel} = this.refs;
        const{ updateSettings, hash } = this.props;

        updateSettings('newTel', hash, "noNeed", newTel.value);
    }

    render(){
        const { updated, telSetting, user } = this.props;

        let Place = "";
        if(user.tel == 0){
            Place = telSetting.nameInput;
        }else{
            Place = user.tel;
        }

        return(
            <div className="change-tel">
                <h3>
                    <span className="stage">*</span> {telSetting.head}:
                </h3>
                <div className="change">
                    {
                        updated === "notUpdate" ?
                            <div className="error">{telSetting.error}</div>
                            :
                            ""
                    }

                    <input type="number" placeholder={Place} ref="newTel"/>
                    <div className="save" onClick={()=>{
                        this.sendUpdateData()
                    }}>
                        {telSetting.save}
                    </div>
                    {
                        updated === "telChanged" ?
                            <div className="accept">{telSetting.accept}</div>
                            :
                            ""
                    }
                </div>
            </div>

        )
    }

}
