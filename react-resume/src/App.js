import Top from './component/Top/Top.js'
import ResumeContent from './component/ResumeContent/ResumeContent.js'
import Bottom from './component/Bottom/Bottom.js'
import LoginBox from './component/LoginBox/LoginBox.js'
import UserCenter from './component/UserCenter/UserCenter.js'
import './App.css';
import './font/font-awesome-4.7.0/css/font-awesome.css'
import React, {Component} from 'react';
import bus from './utils/bus.js';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9090'

class App extends Component{
  state ={
    loginBox: 0,
    loginSuccess: 0,
  }
  render(){
    return(
      <div className="App">
        <Top/>
        <ResumeContent/>
        <Bottom/>
        {/* 点击登录后背景半透明处理 */}
        <LoginBox loginBox={this.state.loginBox}/>
        <UserCenter/>
        <div className="back" style={{display:this.state.loginBox==0?'none':'block'}}></div>
      </div>
    )
  }
  componentDidMount(){
    let that = this
    bus.on('loginMessage', (value)=>{
      that.setState({loginBox:value})
    })
    bus.on('loginSuccess', ()=>{
      that.setState({loginBox:0})
    })
  }
}

export default App;
