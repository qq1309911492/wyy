import React from 'react'
import index from './One/index'
import list from './One/list'
import play from './One/play'
import {Switch,Route,Redirect} from 'react-router-dom'
function App(){ 
    return(
        <div>
            <Switch>
                <Route path='/index' component={index}></Route>
                <Route path='/list/:id' component={list}></Route>
                <Route path='/play/:id' component={play}></Route>
                <Redirect to='/index'></Redirect>
            </Switch>
        </div>
    )
}
export default App
