import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppState from './context/AppState'

ReactDOM.render(
    <AppState>
        <App />
    </AppState>,
    document.getElementById('root')
)