import React from 'react'
import { Route } from 'react-router-dom'
import NavbarReactStrap from './component/navbar'
import News from './component/news'

class App extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <NavbarReactStrap />
                <Route path='/' component={News} exact />
            </div>
        )
    }
}

export default App