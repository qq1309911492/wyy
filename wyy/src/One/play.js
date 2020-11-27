import React from 'react'

import {playy} from '../axios/index'
class play extends React.Component{
    constructor(){
        super()
        this.state={
            playss:''
        }
    }
    componentDidMount(){
        playy({id:this.props.match.params.id}).then(res=>{
           if(res.data.code==200){
               this.setState({
                playss:res.data.data[0].url
               })
           }
          console.log(res);
        })
  
    }
    render(){
        return(
            <div>

                <audio src={this.state.playss} controls></audio>
            </div>
        )
    }
}
export default play