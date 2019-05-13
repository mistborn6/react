import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'
import {TopBlock} from '../topblock'
import { MyTask } from '../mytask';
import {todoListStore} from '../../store'


class Main extends React.Component {
    render() {
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <TopBlock />
                    <Route exact path='/' component={MyTask} />
                </HashRouter>
            </Provider>
        );
    }
}

window.store = todoListStore;


export {Main}
