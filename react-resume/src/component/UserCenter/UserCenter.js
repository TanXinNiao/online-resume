import './UserCenter.css'
import bus from '../../utils/bus.js'

import React,{Component} from 'react'

export default class UserCenter extends Component{
    state = {
        userCenter: 0
    }
    render(){
        return (
            <div className="user-center" style={{display:this.state.userCenter==0?'none':'block'}}>
                <div className="user-info-block">
                    <div className="vip-info-tag">
                        会员信息
                    </div>
                    <div className="vip-info">
                        <div className="user-img"></div>
                        <div className="vip-name-date">
                            <div className="username">
                                江瑞
                            </div>
                            <div className="vip-date-block">
                                <div className="vip-name">
                                    至尊会员
                                </div>
                                <div className="vip-date">
                                    有效期：永久
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="user-resumes-block">
                    <div className="my-resumes-tag">
                        我的简历
                    </div>
                    <div className="resume-info">
                        <div className="resume-img" onClick={this.turnToResume}></div>
                        <div className="resume-edit" onClick={this.turnToResume}>修改下载</div>
                    </div>
                    
                </div>
            </div>
        )
    }

    componentDidMount(){
        let that = this
        bus.on('userCenter', (value)=>{
            that.setState({userCenter:value})
        })
    }
    
    turnToResume = ()=>{
        this.setState({userCenter:0})
        bus.emit('resumeContent', 1)
        bus.emit('bottom', 1)
    }
}