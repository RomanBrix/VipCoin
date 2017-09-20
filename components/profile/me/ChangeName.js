import React, {Component} from 'react';

export default class ChangeName extends Component {

    sendUpdateData(){
        const {newName} = this.refs;
        const{ updateSettings, hash } = this.props;
        updateSettings('newName', hash, "noNeed", newName.value);
    }

    render(){
        const { updated, nameSetting, user } = this.props;
// console.log(user);

        let Place = "";
        if(user.name ==="none"){
            Place = nameSetting.nameInput;
        }else{
            Place = user.name;
        }

        return(
            <div className="change-name">
                <h3>
                    <span className="stage">*</span> {nameSetting.head}:
                </h3>
                <div className="change">
                    {
                        updated === "notUpdate" ?
                            <div className="error">{nameSetting.error}</div>
                            :
                            ""
                    }

                    <input type="text" placeholder={Place} ref="newName"/>
                    <div className="save" onClick={()=>{
                        this.sendUpdateData()
                    }}>
                        {nameSetting.save}
                    </div>
                    {
                        updated === "nameChanged" ?
                            <div className="accept">{nameSetting.accept}</div>
                            :
                            ""
                    }
                </div>
            </div>

        )
    }
}
