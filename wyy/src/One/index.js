import React from 'react'
import '../public/css/index.css'
import wyy from '../public/img/o1.jpg'

import recommend from '../Two/recommend'
import hotsong from '../Two/hotsong'
import search from '../Two/search'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
class index extends React.Component {
    render() {
        return (
            <div>
                <div className='tou'>

                    <img src={wyy} className='imagl'></img>
                    <span className='xiazai'>下载APP</span>

                </div>
                <div className='nav'>
                    <NavLink to='/index/tuijian' className='one_nav' activeClassName='red'>

                        <span> 推荐音乐</span>
                    </NavLink>
                    <NavLink to='/index/hotsong' className='one_nav' activeClassName='red'>
                        <span>热歌榜</span>
                    </NavLink>
                    <NavLink to='/index/search' className='one_nav' activeClassName='red'>
                        <span>搜索</span>
                    </NavLink>

                </div>
                <div>
                    <Switch>
                        <Route path='/index/tuijian' component={recommend}></Route>
                
                        <Route path='/index/hotsong' component={hotsong}></Route>
                        <Route path='/index/search' component={search}></Route>

                        <Redirect to='/index/tuijian'></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default index