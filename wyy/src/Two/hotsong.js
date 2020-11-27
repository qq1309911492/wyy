import React from 'react'

import yun from '../public/img/yun.jpg'
import '../public/css/hotsong.css'
import m1 from '../public/img/m1.jpg'

import {hotlist} from '../axios/index'
class hotsong extends React.Component {
    constructor() {
        super()
        this.state = {
            music: [
                {
                    id: 1,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 2,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 3,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 4,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 5,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 6,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 7,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                },
                {
                    id: 8,
                    name: '会不会（吉他版）',
                    singer: '刘大壮',
                    beizhu: '(不曾遗忘的符号)'
                }
            ],
            hot:[]
        }
    }
    componentDidMount(){
        hotlist().then(res=>{
           let a= res.data.playlist.tracks.filter((item,index)=>{
               return index<20
            })
            this.setState({
                hot:a
            })
          console.log(this.state.hot);
        })
    }   
    render() {
        const { music,hot } = this.state
        return (
            <div className='main'>
                <div className='hand'>
                    <img src={yun}></img>
                    <p>更新日期：<span>11月19日</span></p>
                </div>
                <div className='music'>
                    <ul>
                        {hot.map((item,index) => {
                            return <li key={item.id
                            }>
                                <div className='left' >{index+1}</div>
                                <div className='right'>
                                    <div className='p1'>
                        {item.name}<span>{item.beizhu}</span>
                                    </div>
                                    <span className='m1'>
                                        <img src={m1}></img>
                                    </span>
                                    {item.ar.map(item=>{
                                        return  <span className='p2' key={item.id}>{item.name}</span>
                                    })}
                       
                                </div>
                            </li>
                        })}

                    </ul>
                    <div className='hot'>
                        <span className='hotview'>查看完整榜单</span>
                    </div>
                </div>

            </div>
        )

    }
}
export default hotsong