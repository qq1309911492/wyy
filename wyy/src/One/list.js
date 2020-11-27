import React from 'react'

import '../public/css/list.css'
import cyx from '../public/img/cyx.jpg'
import m1 from '../public/img/m1.jpg'
import {xiangqing} from '../axios/index'
class list extends React.Component {
    constructor(){
     
        super()
        this.state={
            list:[],
            main:[]
        }
    }
    componentDidMount(){
        xiangqing({id:this.props.match.params.id}).then(res=>{
            if(res.data.code==200){
                this.setState({
                    list:res.data.playlist.tracks,
                    main:res.data.playlist
                })
            }
            console.log(this.state.main);
        })
       
   
    }
    render() {
        const {list,main} =this.state
        return (
            <div>
                <div className='handd clearfix'>
                    <div className='fl'>
                        <img src={main.coverImgUrl} className='cyx'></img>
                    </div>
                    <div className='ringht fl'>
        <p className='fl'>{main.name}</p>
                        <p>{main.description}</p>
                    </div>
                </div>
                <p>歌曲列表</p>
                <div className='music'>
                    <ul>
                        {list.map((item,index) => {
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
                        {/* <li>
                            <div className='left' >1</div>
                            <div className='right'>
                                <div className='p1'>
                                    123<span>123</span>
                                </div>
                                <span className='m1'>
                                    <img src={m1}></img>
                                </span>
                                <span className='p2'>asd</span>


                            </div>

                        </li> */}

                    </ul>

                </div>
            </div>
        )
    }
}
export default list