import React, {Component} from 'react';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            // packages: []
        }
    }
    componentWillReceiveProps(nextProps){
        // const { users } = nextProps;
    }

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

    render(){
        const { packages,update, updated } = this.props;

        if(updated ==="newValOk"){
            this.goAlert("СОХРАНЕНО",true);
        }else if(updated ===false){
            this.goAlert("НЕ СОХРАНЕНО", false);
        }


        const packContainer = packages.map((item, index)=>{
           return(
               <div className="newPack" key={index}>
                   <span className="id">{item.id}</span>
                   <input type="text" defaultValue={item.name} id={`packName${item.id}`}/>
                   <input type="number" defaultValue={item.cost} id={`packCost${item.id}`}/>
                   <input type="number" defaultValue={item.coins} disabled/>
                    <span className="radios" id={`packStatus${item.id}`}>
                       <span className="status">Status:</span>
                       <input
                           type="radio"
                           id={`end${item.id}`}
                           name={`status${item.id}`}
                           value="end"
                           defaultChecked={item.status === "end" ? "checked": ""}
                       />
                       <label htmlFor={`end${item.id}`}>End</label>

                       <input
                           type="radio"
                           id={`start${item.id}`}
                           name={`status${item.id}`}
                           value="start"
                           defaultChecked={item.status === "start" ? "checked": ""}
                       />
                       <label htmlFor={`start${item.id}`}>Start</label>

                       <input
                           type="radio"
                           id={`wait${item.id}`}
                           name={`status${item.id}`}
                           value="wait"
                           defaultChecked={item.status === "wait" ? "checked": ""}
                       />
                       <label htmlFor={`wait${item.id}`}>Wait</label>
                    </span>
                   <div className="btn-save" onClick={()=>{update(item.id)}}>Сохранить</div>
               </div>
           )
        });
        return(
            <div className="container">
                <div className="content">
                    <h1>Packages</h1>
                    <div className="packages-container">
                        {packContainer}
                    </div>
                    <div id="alert">
                        Сохранено!
                    </div>
                </div>
            </div>
        )
    }
}
