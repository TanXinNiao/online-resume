import './Top.css'

import React,{Component} from 'react'
import bus from '../../utils/bus'

export default class Top extends Component{
    state ={
        loginSuccess: 0
    }
    render(){
        return (
            <div className="top">
                <div className="top-content">
                    <div className="top-logo">
                        <a>江瑞简历</a>
                    </div>
                    <ul className="top-nav">
                        <li className="item item-page">页面设置</li>
                        <li className="item item-font">文字设置</li>
                        <li className="item item-skin">皮肤设置</li>
                        <li className="item item-cover">封面设置</li>
                        <li className="item item-template">更换模板</li>
                    </ul>
                    <ul className="download-forward">
                        <li className="item item-download" onClick={this.downloadResume}>下载简历</li>
                        <li className="item item-forward">查看转发</li>
                    </ul>
                    <a className="login-block" onClick={this.login} style={{display:this.state.loginSuccess==0?'block':'none'}}>登录/注册</a>
                    <div className="login-user" style={{display:this.state.loginSuccess==0?'none':'flex'}}>
                        <div className="login-user-img" onClick={this.turnToCenter}></div>
                        <div className="login-user-name">
                            江瑞
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let that = this
        bus.on('loginSuccess', ()=>{
            that.setState({loginSuccess:1})
        })
    }

    downloadResume = () => {
        bus.emit('downloadMessage')
    };
    login = () => {
        bus.emit('loginMessage', 1)
    };
    turnToCenter = () => {
        bus.emit('userCenter', 1)
        bus.emit('bottom', 0)
        bus.emit('resumeContent', 0)
    };
}