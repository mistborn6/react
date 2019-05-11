import React from 'react'
import {InputTaskForm} from '../inputtaskform'

class InputTask extends React.Component {
    render () {
        return (
            <div>
                <div className="inputTaskTitle">
                <input type="checkbox" class='taskChk'/>
                <input type="text" class='taskTitle' placeholder='Type Something Here...'/>

                <i class="far fa-star fa-lg icon"></i>
                <i class="fas fa-pencil-alt fa-lg icon icon_edit"></i>
                </div>
                <InputTaskForm />
            </div>
        );
    }
}

export {InputTask}
