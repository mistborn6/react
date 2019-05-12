import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import {TopBlock} from '../topblock'
import { MyTask } from '../mytask';

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <TopBlock />
                <Route exact path='/' component={MyTask} />
            </HashRouter>
        );
    }
}

export {Main}
