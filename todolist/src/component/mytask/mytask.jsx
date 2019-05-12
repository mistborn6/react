import React from 'react'
import {AddTask} from '../addtask'

class MyTask extends React.Component {
    render () {
        return (
          <div class='inputTaskForm'>
              <AddTask />
          </div>  
        );
    }
}

export {MyTask}
