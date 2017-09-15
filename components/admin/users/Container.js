import React, {Component} from 'react';
import TableItems from "./TableItems";
import SearchInput from "./SearchInput";
import SearchPagination from "./SearchPagination";

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            activePage: 1,
            step: 5
        }
    }
    componentWillReceiveProps(nextProps){
        const { users } = nextProps;
        if(users !== undefined) {
            this.setState({
                data: users
            });
        }
    }

    showNusers(num){

        this.setState({
            step: num
        })
    }

    find(value, type){
        const { users} = this.props;
        let searchQuery = value.toLowerCase();

        let display = users.filter((el)=>{
            let searchValue = el.login.toLowerCase();
            switch (type){
                case 0:
                    searchValue = el.login.toLowerCase();
                    searchQuery = value.toLowerCase();
                    break;
                case 1:
                    searchValue = el.hash.toLowerCase();
                    searchQuery = value.toLowerCase();
                    break;
                case 2:
                    searchValue = el.email.toLowerCase();
                    searchQuery = value.toLowerCase();
                    break;
                case 3:
                    const hash = this.decode(value).split("&")[0];
                    searchQuery = hash.toLowerCase();
                    searchValue = el.hash.toLowerCase();
                    break;
            }
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            data: display,
            activePage: 1
        })
    }

    activatingPage(active){

        this.setState({
            activePage: active,
        })


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


    decode(str){
            return decodeURIComponent(atob(str).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
    }

    addCoins(hash,code){
        const { setCoinsToUser,  getUsers} = this.props;
        const decodeed = this.decode(code);
        const decodeHash = decodeed.split("&")[0];
        if(decodeHash.toLowerCase() === hash.toLowerCase()){
            // console.log("ok go forward");
            const options = (decodeed.split("&")[1]).split("_");
            const [one_cost, all_cost, coins ] = options;
            console.log(one_cost, all_cost, coins);
            setCoinsToUser("userGetCoins", hash, coins);
            setTimeout(()=>{
                getUsers("getUsersInfo");
            },450)
        }else{
            // console.log('another user maybe');
            this.goAlert("Не этот пользователь", false);
        }

    }
    render(){
        const { activePage, data, step} = this.state;
        const {  updated  } = this.props;
        if(updated ==="addedOk"){
            this.goAlert("Добавленно",true);
        }else if(updated ===false){
            this.goAlert("НЕ СОХРАНЕНО", false);
        }

        return(
            <div className="container">
                <div className="content">
                    <h1>Users</h1>
                    <SearchInput find={ this.find.bind(this) } showNusers={ this.showNusers.bind(this) } />
                    <TableItems
                        data={data}
                        activePage={ activePage }
                        step={step}
                        addCoins={this.addCoins.bind(this)}
                    />
                    <SearchPagination
                        activePage={activePage}
                        activatingPage={this.activatingPage.bind(this)}
                        data={data}
                        step={step}
                    />
                    <div id="alert">
                        Сохранено!
                    </div>
                </div>
            </div>
        )
    }
}
