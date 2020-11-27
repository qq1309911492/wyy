import React from 'react'

import Reactdom from 'react-dom'

import App from './App'


import './public/js/remScale'
import './public/css/reset.css'
import {BrowserRouter} from 'react-router-dom'
Reactdom.render(<BrowserRouter><App></App></BrowserRouter>
,document.getElementById('root'))
