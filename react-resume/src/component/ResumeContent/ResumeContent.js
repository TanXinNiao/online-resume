import './ResumeContent.css'
import ResumeLeft from '../ResumeLeft/ResumeLeft.js'
import ResumeRight from '../ResumeRight/ResumeRight.js'

import React,{Component} from 'react'
import bus from '../../utils/bus'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

export default class ResumeContent extends Component{
    state = {
        resumeContent: 1
    }
    render(){
        return (
            <div id="resume-content" style={{display:this.state.resumeContent==0?'none':'block'}}>
                <div id="resume-pdf">
                    <ResumeLeft/>
                    <ResumeRight/>
                </div>
            </div>
            
        )
    }

    componentDidMount(){
        let that = this
        bus.on('downloadMessage', ()=>{
            //setIsLoading(true);
            
            var element = document.getElementById("resume-pdf");    // 这个dom元素是要导出pdf的div容器
            var w = element.offsetWidth;    // 获得该容器的宽
            var h = element.offsetHeight;    // 获得该容器的高
            console.log(w, h);
            var offsetTop = element.offsetTop;    // 获得该容器到文档顶部的距离
            var offsetLeft = element.offsetLeft;    // 获得该容器到文档最左的距离
            var canvas = document.createElement("canvas");
            var abs = 0;
            var win_i =  document.body.clientWidth;    // 获得当前可视窗口的宽度（不包含滚动条）
            var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
            if (win_o > win_i) {
                abs = (win_o - win_i) / 2;    // 获得滚动条长度的一半
            }
            canvas.width = w * 2;    // 将画布宽&&高放大两倍
            canvas.height = h * 2;
            var context = canvas.getContext("2d");
            context.scale(2, 2);
            context.translate(-offsetLeft - abs, -offsetTop);
            // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
            // translate的时候，要把这个差值去掉
            html2canvas(element,{
                allowTaint: true,
                scale: 4 // 提升画面质量，但是会增加文件大小
            }).then(function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                console.log(contentWidth, contentHeight);
                //一页pdf显示html页面生成的canvas高度;
                //var pageHeight = contentWidth / 600 * 841.89;
                var pageHeight = Math.floor(contentWidth / 750) * 1180;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var topPosition = -1;
                var leftPosition = -6;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                /*var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;*/

                var imgWidth = 750;
                var imgHeight = Math.floor(732 / contentWidth) * contentHeight;
        
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
        
                var pdf = new jsPDF('', 'pt', 'a4');
        
                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                pdf.addImage(pageData, 'JPEG', leftPosition, topPosition, imgWidth, imgHeight)
                console.log(leftHeight, pageHeight);
                /*if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {    // 分页
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', leftPosition, topPosition, imgWidth, imgHeight)
                        leftHeight -= pageHeight;
                        topPosition -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }*/
                pdf.save('你的名字.pdf');
            });
            
        })
        
        bus.on('resumeContent', (value)=>{
            that.setState({resumeContent:value})
        })
    }
}