import './ResumeRight.css'
import bus from '../../utils/bus.js'

import React,{Component} from 'react'

export default class ResumeLeft extends Component{
    state = {
        name: '',
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
        switch: 0b111111111,
    }
    render(){
        const name = this.state.name
        const {job:intention_job, city:intention_city, salary:intention_salary, time:intention_time} = this.state.intention_block
        const {school:education_school, subject:education_subject, start:education_start, end:education_end, degree:education_degree} = this.state.education_block
        const {company:work_company, role:work_role, start:work_start, end:work_end} = this.state.work_block
        const {name:project_name, role:project_role, start:project_start, end:project_end} = this.state.project_block
        const {company:intern_company, role:intern_role, start:intern_start, end:intern_end} = this.state.intern_block
        const {name:campus_name, role:campus_role, start:campus_start, end:campus_end} = this.state.campus_block
        return (
            <div className="resume-right">
                <div className="job-intension">
                    <h1>{name}的简历</h1>
                    <ul className="job-intension-list" style={{display:this.state.switch&0b1?'flex':'none'}}>
                        <li className="item item-job-required">求职意向： {intention_job}</li>
                        <li className="item item-job-city">意向城市： {intention_city}</li>
                        <li className="item item-job-salary">期望薪资： {intention_salary}</li>
                        <li className="item item-job-time">入职时间： {intention_time}</li>
                    </ul>
                </div>
                <div className="education-backgoround" style={{display:this.state.switch&0b10?'block':'none'}}>
                    <div className="education-logo-block">
                        <div className="education-logo"></div>
                        <div className="education-title">
                            教育背景
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="education-list">
                        <li className="item">
                            <div className="education-header">
                                <div className="education-time">{education_start} ~ {education_end}</div>
                                <div className="education-school">{education_school}</div>
                                <div className="education-subject">{education_subject}</div>
                                <div className="education-degree">（{education_degree}）</div>
                            </div>
                            <div className="education-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="work-experience" style={{display:this.state.switch&0b1000?'block':'none'}}>
                    <div className="work-logo-block">
                        <div className="work-logo"></div>
                        <div className="work-title">
                            工作经验
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="work-list">
                        <li className="item">
                            <div className="work-header">
                                <div className="work-time">{work_start} ~ {work_end}</div>
                                <div className="work-company">{work_company}</div>
                                <div className="work-position">{work_role}</div>
                            </div>
                            <div className="work-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="project-experience" style={{display:this.state.switch&0b100?'block':'none'}}>
                    <div className="project-logo-block">
                        <div className="project-logo"></div>
                        <div className="project-title">
                            项目经验
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="project-list">
                        <li className="item">
                            <div className="project-header">
                                <div className="project-time">{project_start} ~ {project_end}</div>
                                <div className="project-name">{project_name}</div>
                                <div className="project-role">{project_role}</div>
                            </div>
                            <div className="project-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="intern-experience" style={{display:this.state.switch&0b10000?'block':'none'}}>
                    <div className="intern-logo-block">
                        <div className="intern-logo"></div>
                        <div className="intern-title">
                            实习经验
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="intern-list">
                        <li className="item">
                            <div className="intern-header">
                                <div className="intern-time">{intern_start} ~ {intern_end}</div>
                                <div className="intern-company">{intern_company}</div>
                                <div className="intern-role">{intern_role}</div>
                            </div>
                            <div className="intern-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="campus-experience" style={{display:this.state.switch&0b100000?'block':'none'}}>
                    <div className="campus-logo-block">
                        <div className="campus-logo"></div>
                        <div className="campus-title">
                            校园经历
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="campus-list">
                        <li className="item">
                            <div className="campus-header">
                                <div className="campus-time">{campus_start} ~ {campus_end}</div>
                                <div className="campus-name">{campus_name}</div>
                                <div className="campus-role">{campus_role}</div>
                            </div>
                            <div className="campus-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="honour-experience" style={{display:this.state.switch&0b1000000?'block':'none'}}>
                    <div className="honour-logo-block">
                        <div className="honour-logo"></div>
                        <div className="honour-title">
                            荣誉证书
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="honour-list">
                        <li className="item">
                            <div className="honour-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="self-evaluatione" style={{display:this.state.switch&0b10000000?'block':'none'}}>
                    <div className="evaluatione-logo-block">
                        <div className="evaluatione-logo"></div>
                        <div className="evaluatione-title">
                            自我评价
                            <div className="line"></div>
                        </div> 
                    </div>
                    <ul className="evaluatione-list">
                        <li className="item">
                            <div className="evaluatione-description">
                                <p>GPA：X.X / 4.0（专业前X%）</p>
                                <p>获得学校一等奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let that = this
        bus.on('inputChange', (block, key, value)=>{
            if(block === 'basic_block' && key == 'name'){
                that.setState({name:value})
                return
            }
            let block_t = that.state[block]
            for(let item in block_t){
                if(item === key){
                    block_t[item] = value
                    that.setState({})
                }
            }
        })
        bus.on('switchChange', (value)=>{
            that.setState({switch:value})
        })
    }
}