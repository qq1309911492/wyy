import React from 'react'

import '../public/css/search.css'
import ss from '../public/img/ss.jpg'
import { hot, sousuo } from '../axios/index'
class search extends React.Component {
    constructor() {
        super()
        this.state = {
            nav: [
                {
                    id: 1,
                    name: '耗子尾汁'
                },
                {
                    id: 2,
                    name: '执迷不悟'
                },
                {
                    id: 3,
                    name: '陈奕迅新歌'
                },
                {
                    id: 4,
                    name: '杀死那个石家庄人'
                },
                {
                    id: 5,
                    name: '薛之谦'
                },
                {
                    id: 6,
                    name: '说散就散'
                },
                {
                    id: 7,
                    name: '会不会'
                },
                {
                    id: 8,
                    name: '经济舱'
                },
                {
                    id: 9,
                    name: '许嵩 如果当时2020'
                }
            ],
            hotlist: [],
            list: [],
            name: '',
            content: false



        }
    }
    componentDidMount() {
        hot().then(res => {
            if (res.data.code == 200) {
                this.setState({
                    hotlist: res.data.result.hots
                })
            }
            console.log(this.state.hotlist);
            console.log(res);
        })
    }
    intt(e) {
        const X = document.getElementById('tb')
        const ipt = document.getElementById('iup')
        if (!ipt.value) {
            this.setState({
                list: []
            })
        }
        console.log(ipt.value);
        this.state.content = e.target.value
        let a = e.target.value


        if (this.state.content) {
            X.style.display = 'inline-block'
        } else {
            X.style.display = 'none'
        }
        console.log(X);
    }
    delect() {
        const X = document.getElementById('tb')
        X.style.display = 'none'
        const ipt = document.getElementById('iup')
        ipt.value = ''
        this.setState({
            list:[]
        })


    }
    componentWillMount() {
        const X = document.getElementById('tb');
        console.log(X);
        console.log('123');
    }
    ent(e) {
        const ipt = document.getElementById('iup')
        if (e.keyCode == 13) {
            sousuo({ keywords: ipt.value }).then(res => {

                this.setState({
                    list: res.data.result.songs,
                    name: ipt.value
                })

                console.log(this.state.list, '123');
            })
        }


    }
    hotss(first){
        const ipt = document.getElementById('iup')
        ipt.value=first
        console.log(first);
        const X = document.getElementById('tb')
        console.log(X);
        X.style.display = 'inline-block'
        sousuo({keywords:first}).then(res=>{
            this.setState({
                list: res.data.result.songs,
                name: first
           
            })
        })
    }
    render() {


        const { nav, content, hotlist, list, name } = this.state
        return (
            <div>
                <div className='main'>
                    <div className='ipt'>
                        <em></em>
                        <input placeholder='搜索歌手，歌曲，专辑' onChange={this.intt.bind(this)} id='iup' onKeyDown={this.ent.bind(this)}></input>
                        <figure className='close'>
                            <i id='tb' onClick={this.delect.bind(this)} style={{ display: 'none' }}></i>
                        </figure>
                    </div>
                    <div className={list.length == 0 ? 'inner show' : 'noshow'}>
                        <p className='sousuo'>热门搜索</p>
                        <ul>
                            {hotlist.map((item, index) => {
                                return <li key={index} onClick={this.hotss.bind(this,item.first)}>
                                    <p>{item.first}</p>
                                </li>
                            })}


                        </ul>

                    </div>
                    <ul className={list.length == 0?'noshow':'show'}>
                        <h3 className='hh3'>搜索:{name}</h3>
                        {list.map(item => {
                            return <li className='recomitem' key={item.id}>
                                <i></i>
                                <span>{item.name}</span>
                            </li>
                        })}

                    </ul>
                </div>
            </div>
        )
    }
}
export default search