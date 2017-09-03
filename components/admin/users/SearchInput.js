import React, {Component} from 'react';
import { FormGroup, FormControl, Radio } from  "react-bootstrap";

export default class SearchInput extends Component {
    render(){
        return(
            <div className="search">
                <FormGroup>
                <FormControl
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Поиск"
                />
                    <div className="radios">
                        <Radio name="radioGroup" defaultChecked inline>
                            Login
                        </Radio>
                        {' '}
                        <Radio name="radioGroup" inline>
                            Hash
                        </Radio>
                        {' '}
                        <Radio name="radioGroup" inline>
                            CODE
                        </Radio>
                    </div>
                </FormGroup>
            </div>
        )
    }
}
