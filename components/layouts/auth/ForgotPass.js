import React, {Component} from 'react';
import axios from "axios";

export default class ForgotPass extends Component {
    render(){
        const { forgot } = this.props;
        return(
            <div className="rendered-container">
                <p className="text">{forgot.text}</p>
                <div className="inputs">
                    <label htmlFor="email"><i className="icon-at"/></label>
                    <input type="email" name="email" id="email" placeholder={forgot.inputEmail} ref="mailInput"/>
                </div>
                <div className="btn-ok" onClick={()=>{
                    const { mailInput } =this.refs;

                    axios.get(`http://localhost:8888/vipcoin/forgotPassword.php`, {params: {type: "fgt", mail: mailInput.value}})
                        .then(function(res) {
                            console.log(res);
                            if(res === "Not this email"){
                                alert("Not this email");
                            }else{
                                alert("Check e-mail");
                            }
                            // dispatch({type: act.GET_PACKAGES_INFO, packages: res.data})
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}>{forgot.btnSend}</div>
            </div>
        )
    }
}
