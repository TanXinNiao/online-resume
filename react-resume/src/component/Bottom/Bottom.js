import './Bottom.css'
import bus from '../../utils/bus.js'

import React,{Component} from 'react'
import axios from 'axios'

export default class ResumeLeft extends Component{
    constructor(props){
        super(props)
    }
    state = {
        bottom: 1,
        header_cur: 0,
        // switch是一个9位二进制数，分别存储10个开关的情况
        // 如switch=3,即000000011，表示求职意图、教育经历是开的，其他都是关的
        switch: 0b111111111,
        basic_block: {
            name:'',
            age: '',
            phonenumber: '',
            email: '',
            workage: '',
            img: '',
            gender: 0,
            married: ''
        },
        intention_block:{
            job: '',
            city: '',
            salary: '',
            time: ''
        },
        education_block:{
            school: '',
            subject: '',
            start: '',
            end: '',
            degree: '',
            description: ''
        },
        project_block:{
            name: '',
            role: '',
            start: '',
            end: '',
            description: ''
        },
        work_block:{
            company: '',
            role: '',
            start: '',
            end: '',
            description: ''
        },
        intern_block:{
            company: '',
            role: '',
            start: '',
            end: '',
            description: ''
        },
        campus_block:{
            name: '',
            role: '',
            start: '',
            end: '',
            description: ''
        },
    }
    render(){
        return(
            <div className="bottom" style={{display:this.state.bottom==0?'none':'block'}}>
                <div className="bottom-content">
                    <div className="bottom-header">
                        <ul className="bottom-list">
                            <li className="item active item-basic">基本信息<div className="line"></div></li>
                            <li className="item item-intention"><div className={this.state.switch&0b1?'switchon switch':'switchoff switch'}></div>求职意图<div className="line"></div></li>
                            <li className="item item-education"><div className={this.state.switch&0b10?'switchon switch':'switchoff switch'}></div>教育经历<div className="line"></div></li>
                            <li className="item item-project"><div className={this.state.switch&0b100?'switchon switch':'switchoff switch'}></div>项目经验<div className="line"></div></li>
                            <li className="item item-work"><div className={this.state.switch&0b1000?'switchon switch':'switchoff switch'}></div>工作经验<div className="line"></div></li>
                            <li className="item item-intern"><div className={this.state.switch&0b10000?'switchon switch':'switchoff switch'}></div>实习经验<div className="line"></div></li>
                            <li className="item item-campus"><div className={this.state.switch&0b100000?'switchon switch':'switchoff switch'}></div>校园经历<div className="line"></div></li>
                            <li className="item item-skill"><div className={this.state.switch&0b1000000?'switchon switch':'switchoff switch'}></div>技能特长<div className="line"></div></li>
                            <li className="item item-honor"><div className={this.state.switch&0b10000000?'switchon switch':'switchoff switch'}></div>荣誉证书<div className="line"></div></li>
                            <li className="item item-evaluation"><div className={this.state.switch&0b100000000?'switchon switch':'switchoff switch'}></div>自我评价<div className="line"></div></li>
                        </ul>
                    </div>
                    <div className="bottom-text">
                        <div className="bottom-basic-block" style={{display: this.state.header_cur==0?'block':'none'}}>
                            <ul className="bottom-basic-list">
                                <li className="item item-name">你的姓名<input className="name-input" value={this.state.basic_block.name} onChange={this.inputChangeHandler.bind(this, 'name', 'basic_block')}></input></li>
                                <li className="item item-birthday">你的年龄<input className="birthday-input" onChange={this.inputChangeHandler.bind(this, 'age', 'basic_block')}></input><div className="age-checked"></div><div className="show-age">显示年龄</div></li>
                                <li className="item item-phonenumber">联系电话<input className="phonenumber-input" onChange={this.inputChangeHandler.bind(this, 'phonenumber', 'basic_block')}></input></li>
                                <li className="item item-email">联系邮箱<input className="email-input" onChange={this.inputChangeHandler.bind(this, 'email', 'basic_block')}></input></li>
                                <li className="item item-workage">工作年限<input className="workage-input" onChange={this.inputChangeHandler.bind(this, 'workage', 'basic_block')}></input></li>
                                <li className="item item-img">照片设置<div className="upload-img">上传照片</div><div className="img-checked"></div><div className="show-img">显示照片</div></li>
                                <li className="item item-gender">性别<input className="gender-input" onChange={this.inputChangeHandler.bind(this, 'gender', 'basic_block')}></input></li>
                                <li className="item item-married">婚姻状况<input className="married-input" onChange={this.inputChangeHandler.bind(this, 'married', 'basic_block')}></input></li>
                            </ul>
                        </div>
                        <div className="bottom-intention-block" style={{display: this.state.header_cur==1?'block':'none'}}>
                            <ul className="bottom-intention-list">
                                <li className="item job">求职意向<input className="job-input" onChange={this.inputChangeHandler.bind(this, 'job', 'intention_block')}></input></li>
                                <li className="item city">意向城市<input className="city-input" onChange={this.inputChangeHandler.bind(this, 'city', 'intention_block')}></input></li>
                                <li className="item salary">期望薪资<input className="salary-input" onChange={this.inputChangeHandler.bind(this, 'salary', 'intention_block')}></input></li>
                                <li className="item time">入职时间<input className="time-input" onChange={this.inputChangeHandler.bind(this, 'time', 'intention_block')}></input></li>
                            </ul>
                        </div>
                        <div className="bottom-education-block" style={{display: this.state.header_cur==2?'block':'none'}}>
                            <div className="bottom-education-flex">
                                <ul className="bottom-education-list">
                                    <li className="education-school">学校名称<input className="education-school-input" onChange={this.inputChangeHandler.bind(this, 'school', 'education_block')}></input></li>
                                    <li className="education-subject">所学专业<input className="education-subject-input" onChange={this.inputChangeHandler.bind(this, 'subject', 'education_block')}></input></li>
                                    <li className="education-time">就读时间<input className="education-start-input" onChange={this.inputChangeHandler.bind(this, 'start', 'education_block')}></input>-<input className="education-end-input" onChange={this.inputChangeHandler.bind(this, 'end', 'education_block')}></input></li>
                                    <li className="education-degree">学历<input className="education-degree-input" onChange={this.inputChangeHandler.bind(this, 'degree', 'education_block')}></input></li>
                                </ul>
                                <textarea className="education-description-input"></textarea>
                            </div>
                            <div className="bottom-add-education">新增一条教育背景</div>
                        </div>

                        <div className="bottom-project-block" style={{display: this.state.header_cur==3?'block':'none'}}>
                            <div className="bottom-project-flex">
                                <ul className="bottom-project-list">
                                    <li className="project-name">项目名称<input className="project-name-input" onChange={this.inputChangeHandler.bind(this, 'name', 'project_block')}></input></li>
                                    <li className="project-role">参与角色<input className="project-role-input" onChange={this.inputChangeHandler.bind(this, 'role', 'project_block')}></input></li>
                                    <li className="project-time">项目时间<input className="project-start-input" onChange={this.inputChangeHandler.bind(this, 'start', 'project_block')}></input>-<input className="project-end-input" onChange={this.inputChangeHandler.bind(this, 'end', 'project_block')}></input></li>
                                </ul>
                                <textarea className="project-description-input"></textarea>
                                <div className="bottom-add-project">新增一条项目经验</div>
                            </div>
                        </div>

                        <div className="bottom-work-block" style={{display: this.state.header_cur==4?'block':'none'}}>
                            <div className="bottom-work-flex">
                                <ul className="bottom-work-list">
                                    <li className="work-company">公司名称<input className="work-company-input" onChange={this.inputChangeHandler.bind(this, 'company', 'work_block')}></input></li>
                                    <li className="work-role">职位角色<input className="work-role-input" onChange={this.inputChangeHandler.bind(this, 'role', 'work_block')}></input></li>
                                    <li className="work-time">在职时间<input className="work-start-input" onChange={this.inputChangeHandler.bind(this, 'start', 'work_block')}></input>-<input className="work-end-input" onChange={this.inputChangeHandler.bind(this, 'end', 'work_block')}></input></li>
                                </ul>
                                <textarea className="work-description-input"></textarea>
                                <div className="bottom-add-work">新增一条工作经验</div>
                            </div>
                        </div>

                        <div className="bottom-intern-block" style={{display: this.state.header_cur==5?'block':'none'}}>
                            <div className="bottom-intern-flex">
                                <ul className="bottom-intern-list">
                                    <li className="intern-company">公司名称<input className="intern-company-input" onChange={this.inputChangeHandler.bind(this, 'company', 'intern_block')}></input></li>
                                    <li className="intern-role">职位角色<input className="intern-role-input" onChange={this.inputChangeHandler.bind(this, 'role', 'intern_block')}></input></li>
                                    <li className="intern-time">在职时间<input className="intern-start-input" onChange={this.inputChangeHandler.bind(this, 'start', 'intern_block')}></input>-<input className="intern-end-input" onChange={this.inputChangeHandler.bind(this, 'end', 'intern_block')}></input></li>
                                </ul>
                                <textarea className="intern-description-input"></textarea>
                                <div className="bottom-add-intern">新增一条工作经验</div>
                            </div>
                        </div>

                        <div className="bottom-campus-block" style={{display: this.state.header_cur==6?'block':'none'}}>
                            <div className="bottom-campus-flex">
                                <ul className="bottom-campus-list">
                                    <li className="campus-name">经历名称<input className="campus-name-input" onChange={this.inputChangeHandler.bind(this, 'name', 'campus_block')}></input></li>
                                    <li className="campus-role">担任角色<input className="campus-role-input" onChange={this.inputChangeHandler.bind(this, 'role', 'campus_block')}></input></li>
                                    <li className="campus-time">经历时间<input className="campus-start-input" onChange={this.inputChangeHandler.bind(this, 'start', 'campus_block')}></input>-<input className="campus-end-input" onChange={this.inputChangeHandler.bind(this, 'end', 'campus_block')}></input></li>
                                </ul>
                                <textarea className="campus-description-input"></textarea>
                                <div className="bottom-add-campus">新增一条校园经历</div>
                            </div>
                        </div>

                        <div className="bottom-skill-block" style={{display: this.state.header_cur==7?'block':'none'}}>
                            <div className="bottom-skill-flex">
                                <textarea className="skill-description-input"></textarea>
                            </div>
                        </div>

                        <div className="bottom-honour-block" style={{display: this.state.header_cur==8?'block':'none'}}>
                            <div className="bottom-honour-flex">
                                <textarea className="honour-description-input"></textarea>
                            </div>
                        </div>

                        <div className="bottom-evaluation-block" style={{display: this.state.header_cur==9?'block':'none'}}>
                            <div className="bottom-evaluation-flex">
                                <textarea className="evaluation-description-input"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        
        // 为header中的每个li添加点击事件监听
        this.headerList = document.querySelectorAll('.bottom-header>ul>li')
        for(let i=0;i<this.headerList.length;i++){
            let that = this
            this.headerList[i].onclick = function(e){
                // 这里点击事件监听设计得有点粗糙了
                //因为switch按钮在li标签了，所以要做一下的if else判断
                if(e.target.classList[0] == 'switchoff' || e.target.classList[1] == 'switchoff'){
                    return 
                }
                if(e.target.classList[0] == 'switchon' || e.target.classList[1] == 'switchon'){
                    let li = document.getElementsByClassName('active')[0]
                    li.classList.remove('active')
                    console.log(e.target.parentElement);
                    e.target.parentElement.classList.add('active')
                    that.setState({header_cur:i})
                    return
                }
                let li = document.getElementsByClassName('active')[0]
                li.classList.remove('active')
                e.target.classList.add('active')
                that.setState({header_cur:i})
            }
        }
        // 为header中的每个switch按钮添加点击事件监听
        this.headerSwitchList = document.querySelectorAll('.bottom-header>ul>li>.switch')
        for(let i=0;i<this.headerSwitchList.length;i++){
            let that = this
            this.headerSwitchList[i].onclick = function(e){
                // 每一位相当于一个开关的开关情况
                let t = i
                let andCompute = 1
                while(t){
                    andCompute <<= 1
                    t--
                }
                if(e.target.classList[0] == 'switchon' || e.target.classList[1] == 'switchon'){
                    e.target.classList.remove('switchon')
                    e.target.classList.add('switchoff')
                    let switch_t = that.state.switch ^ andCompute
                    that.setState({switch:switch_t})
                    bus.emit('switchChange', switch_t)
                }
                else{
                    e.target.classList.remove('switchoff')
                    e.target.classList.add('switchon')
                    let switch_t = that.state.switch | andCompute
                    that.setState({switch:switch_t})
                    bus.emit('switchChange', switch_t)
                }
            }
        }

        let that = this
        axios.get('/api/resume/info/1').then((response) => {
            console.log(response);
            if(response.data.entity.msg == 'success'){
                let resume = response.data.entity.data
                for(let key in resume){
                    // 跳过不处理用户id和简历id
                    if(key == 'userId' || key == 'resumeId')
                        continue
                    // 返回的resume结构中key的值为'resumeBasicName'这样的形式，分三段处理，我们获取的是后两段的值
                    // 第二个e的下一个字符开始是我们需要的字符串，如BasicName
                    let str = key.slice(key.indexOf('e', 2)+1)
                    // 将str拆分成两段字符串，如将BasicName拆为basic和name
                    let block = '', name = ''
                    for(let i=1;i<str.length;i++){
                        if(str[i]<='Z'&&str[i]>='A'){
                            block = str.slice(0, i)
                            name = str.slice(i)
                        }
                    }
                    block = block.replace(block[0], block[0].toLowerCase())
                    name = name.replace(name[0], name[0].toLowerCase())
                    block += '_block'
                    that.inputRender(name, block, resume[key])
                }
                that.setState({})
            }
            else{
                return
            }
        })


        bus.on('bottom', (value)=>{
            that.setState({bottom:value})
        })

    }
    // 为每个input添加onchange事件绑定方法
    inputChangeHandler = (key, block, event)=>{
        /*
        let block_t = this.state[block]
        for(let item in block_t){
            if(item === key){
                block_t[item] = event.target.value
                bus.emit('inputChange', block, key, event.target.value)
            }
        }*/
        let that = this
        let block_t = block.slice(0, block.indexOf('_'))
        let key_t = 'resume_' + block_t + '_' + key
        axios.post('/api/resume/edit', {
            resumeId: '1',
            key: key_t,
            value: event.target.value
        }).then((response) => {
            that.inputRender(key, block, event.target.value)
            console.log(key, block, event.target.value);
        })
    }

    inputRender = (key, block, value)=>{
        let block_t = this.state[block]
        for(let item in block_t){
            if(item == key){
                console.log('item == key');
                block_t[item] = value
                bus.emit('inputChange', block, key, value)
            }
        }
        return
    }
}