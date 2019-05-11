import React from 'react'
import {HashRouter} from 'react-router-dom'
import {TopBlock} from '../topblock'

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <TopBlock />
            </HashRouter>
        );
    }
}

export {Main}
