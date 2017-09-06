import React, {Component} from 'react';
import { FormGroup, FormControl, Radio } from  "react-bootstrap";

export default class SearchInput extends Component {
    render(){
        const { find, showNusers } = this.props;
        return(
            <div className="search">
                <FormGroup>
                <FormControl
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Поиск"
                    onChange={({ target })=>{
                        const radios =  document.querySelectorAll('input[type=radio]');
                        for(let i = 0; i < radios.length; i++){
                            if(radios[i].checked){
                                find(target.value, i);
                            }
                        }

                    }}
                />
                    <div className="radios">
                        <Radio name="radioGroup" defaultChecked inline ref="login">
                            Login
                        </Radio>
                        {' '}
                        <Radio name="radioGroup" inline ref="hash">
                            Hash
                        </Radio>
                        {' '}
                        <Radio name="radioGroup" inline ref="email">
                            E-mail
                        </Radio>
                        <input
                            placeholder="Показать 'n' пользователей"
                            type="number"
                            onChange={({target})=>{
                                showNusers(+target.value);
                            }}
                        />
                    </div>
                </FormGroup>
            </div>
        )
    }
}
