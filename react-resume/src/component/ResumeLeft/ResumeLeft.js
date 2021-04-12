import './ResumeLeft.css'
import bus from '../../utils/bus.js'

import React,{Component} from 'react'

export default class ResumeLeft extends Component{
    state = {
        basic_block: {
            age: '',
            phonenumber: '',
            email: '',
            workage: '',
            img: '',
            gender: '',
            married: ''
        },

    }

    render(){
        const {age,phonenumber,email, workage,img,gender,married} = this.state.basic_block

        return (
            <div className="resume-left">
                <div className="my-img"></div>
                <ul className="base-info">
                    <li className="item item-age"><i className="fa fa-user-circle-o" aria-hidden="true"></i>{age}岁</li>
                    <li className="item item-sex"><i className={gender=='女'?'fa fa-venus':'fa fa-mars'}aria-hidden="true"></i>{gender}</li>
                    <li className="item item-workage"><i className="fa fa-shopping-bag" aria-hidden="true"></i>{workage}</li>
                    <li className="item item-phonenumber"><i className="fa fa-phone" aria-hidden="true"></i>{phonenumber}</li>
                    <li className="item item-email"><i className="fa fa-envelope-open-o" aria-hidden="true"></i>{email}</li>
                </ul>
                <div className="skill">
                    <p>熟练掌握Office软件算是是是是是</p>
                    <p><br></br></p>
                    <p>如果不想用文字展示，可以用标签形式体现</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let that = this
        bus.on('inputChange', (block, key, value)=>{
            if(block === 'basic_block' && key != 'name'){
                that.state.basic_block[key] = value
                that.setState({})
                return
            }
        })
    }
}