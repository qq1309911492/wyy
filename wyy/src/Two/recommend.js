import React from 'react'

import '../public/css/recommend.css'

import r1 from '../public/img/r1.jpg'

import m1 from '../public/img/m1.jpg'
import wyy from '../public/img/wyy.jpg'

import 'swiper/css/swiper.css'

import Swiper from 'swiper/js/swiper.js'

import { recMusic, oneMusic, banner } from '../axios/index'
import sq from '../public/img/sq.jpg'
import axios from 'axios'
class recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            // list: [
            //     {
            //         id: 1,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'
            //     }, {
            //         id: 2,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'

            //     }, {
            //         id: 3,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'
            //     }, {
            //         id: 4,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'
            //     }, {
            //         id: 5,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'
            //     }, {
            //         id: 6,
            //         url: r1,
            //         p: '[华语速爆新歌]  陈奕迅淡然呼出爱情无形重量',
            //         num: '858.1万'
            //     }
            // ],
            // musiclist: [
            //     {
            //         id: 1,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     },
            //     {
            //         id: 2,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     },
            //     {
            //         id: 3,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     },
            //     {
            //         id: 4,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     },
            //     {
            //         id: 5,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     },
            //     {
            //         id: 6,
            //         sing: '失眠飞行',
            //         beizhu: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
            //         geshou: 'Higher Brothers'
            //     }
            // ],
            list: [],
            musiclist: [],
            banner: [],

        }
    }
    tiaozhao(id) {
        console.log(id);
        this.props.history.push('/list/' + id)

    }
    componentDidMount() {



        axios.all([recMusic({ limit: 6 }), oneMusic(), banner()]).then(axios.spread((one, two, three) => {
            if (one.data.code == 200) {
                this.setState({
                    list: one.data.result
                })
            }
            if (two.data.code == 200) {
                this.setState({
                    musiclist: two.data.result
                })
            }
            if (three.data.code == 200) {
                this.setState({
                    banner: three.data.banners
                })
                new Swiper(".swiper-container", {
                    loop: true,
                    autoplay: {
                        delay: 1000
                    }
                });
            }
            console.log(three);
        }))
    }
    play(id){
        this.props.history.push('/play/' + id) 
    }
    render() {

        const { list, musiclist, banner } = this.state
        return (
            <div className='zong'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {banner.map((item, index) => {
                            return <div className="swiper-slide" key={index} >
                                <img src={item.imageUrl}></img>
                            </div>
                        })}


                    </div>
                </div>
                <div className='toubu'>
                    <span>推荐歌单</span>
                </div>
                <div className='list'>
                    <ul className='clearfix'>
                        {list.map(item => {
                            return <li key={item.id} onClick={this.tiaozhao.bind(this,item.id)}>
                                <img src={item.picUrl}></img>
                                <p>{item.name}</p>
                                <span>{item.playCount}</span>
                            </li>
                        })}
                    </ul>
                </div>

                <div className='toubu'>
                    <span>最新音乐</span>
                </div>
                <div className='music'>
                    <ul>
                        {musiclist.map(item => {
                            return <li key={item.id} onClick={this.play.bind(this,item.id)}>
                                <div className='p1'>
                                    {item.name}<span>{item.beizhu}</span>
                                </div>
                                <span className='m1'>
                                    <img src={m1}></img>
                                </span>
                                <img src={sq}></img>
                                {item.song.artists.map(item => {
                                    return <span className='p2' key={item.id}>{item.name}</span>
                                })}

                            </li>
                        })}


                    </ul>
                </div>
                <div className='foot'>
                    <div className='tuu'>
                        <img src={wyy}></img>
                    </div>
                    <div className='open'>打开APP，发现更多好音乐</div>
                    <p>网易公司版权所有31997-2020杭州乐读科技有限公司运营</p>
                </div>
            </div >
        )
    }
}
export default recommend