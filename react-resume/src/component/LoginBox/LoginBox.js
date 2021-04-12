import './LoginBox.css'
import bus from '../../utils/bus.js'
import axios from 'axios'

import React,{Component} from 'react'


export default class LoginBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            warnMessage: '',
            isWarn: 0,
        }
    }
    
    render(){
        return (
            <div className="login-box" style={{display:this.props.loginBox==0?'none':'block'}}>
                <form className="box" action="">
                    <h1>欢迎来到江瑞简历！</h1>
                    <input type="text" placeholder="用户名" onChange={this.loginInputHandler.bind(this, 'username')}></input>
                    <input type="password" placeholder="密码" onChange={this.loginInputHandler.bind(this, 'password')}></input>
                    <div className="warn" style={{display:this.state.isWarn==0?'none':'block'}}>{this.state.warnMessage}</div>
                    <div className="loginButton" onClick={this.login}>登录</div>
                </form>
            </div>
        )
    }

    componentDidMount(){
        let that = this
        bus.on('loginSuccess', ()=>{
            that.setState({loginBox:0})
        })
    }

    loginInputHandler = (key, event)=>{
        if(key == 'password'){
            this.setState({password: event.target.value})
        }
        else{
            this.setState({username: event.target.value})
        }
    }

    login = ()=>{
        if(this.state.username.length == 0){
            this.setState({isWarn:1})
            this.setState({warnMessage:'用户名不能为空！'})
            return;
        }
        if(this.state.password.length == 0){
            this.setState({isWarn:1})
            this.setState({warnMessage:'用户名不能为空！'})
            return;
        }
        if(this.state.username.length < 2){
            this.setState({isWarn:1})
            this.setState({warnMessage:'用户名的长度最小为2！'})
            return;
        }
        if(this.state.username.length > 6){
            this.setState({isWarn:1})
            this.setState({warnMessage:'用户名的长度最大不超过6！'})
            return;
        }
        if(this.state.password.length < 6){
            this.setState({isWarn:1})
            this.setState({warnMessage:'密码的长度最小为6！'})
            return;
        }
        if(this.state.password.length > 16){
            this.setState({isWarn:1})
            this.setState({warnMessage:'密码的长度最大不超过16！'})
            return;
        }
        axios.post('/api/user/login', {
            userName: this.state.username,
            userPassword: this.state.password
        }).then((response) => {
            if(response.data.entity.msg == 'success'){
                bus.emit('loginSuccess')
            }
            else{
                this.setState({isWarn:1})
                this.setState({warnMessage:'用户名或密码错误'})
            }
        })
        this.setState({isWarn:0})
    }
}