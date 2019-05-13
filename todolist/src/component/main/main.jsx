import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import {TopBlock} from '../topblock'
import { MyTask } from '../mytask';

import {todoListStore} from '../../store'
import {addTodolist} from '../../action'

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

window.store = todoListStore;
window.addTodolist = addTodolist;


export {Main}
