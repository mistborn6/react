import React from 'react'
import {InputName} from '../inputname'

class InputTaskForm extends React.Component {
    render () {
        return (
            <div class='inputTaskForm'>
                <div class="inputTask">
                    <InputName className='far fa-calendar-alt' inputName='Deadline'/>
                    <div class='inputForm'>
                        <input type="date" class='inputStyle inputDate' value={this.props.date}/>
                        <input type="time" class='inputStyle inputDate' value={this.props.time}/>
                    </div>
                    <InputName className='far fa-file' inputName='File'/>
                    <div class='inputForm'>
                        <input type="file" class='inputStyle'/><br/>
                        <span class='inputStyle'>{this.props.fileName}</span>
                    </div>
                    <InputName className='far fa-comment-dots' inputName='Comment'/>
                    <div class='inputForm'>
                        <textarea cols="55" rows="7" class='inputStyle'>
                            {this.props.comment}
                        </textarea>
                    </div>
                </div>
                <div>
                    <button class='button cancelButton' onClick={this.props.closeAdd}>X Cancel</button>
                    <button class='button addButton'>+ Add Task</button>
                </div>
            </div>
        );
    }
}

export {InputTaskForm}
