import React from 'react'
import ReactDOM from 'react-dom'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'

// import main App
import App from './app'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
)