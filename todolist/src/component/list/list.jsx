import React from 'react'
import {InputTask} from '../inputtask'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            important: this.props.listData.important,
            complete: this.props.listData.complete,
            editTask: null,
        }
        this.changeState = this.changeState.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.list = React.createRef()
    }
    
    changeState(type) {
        switch (type) {
            case 'complete':
                this.setState({complete: window.event.target.checked});
                break;
            case 'important':
                this.state.important == '' ? this.setState({important: 'Y'}) : this.setState({important: ''});
                break;
        }
    }

    openEdit(event) {
        if (event.target.className.indexOf('fa-star') === -1 &&
            event.target.className.indexOf('taskChk') === -1 ) {
                this.list.current.style.display = 'none';
                this.setState({editTask: (<InputTask closeAdd={this.closeEdit} listData={this.props.listData} />)})
            }
    }

    closeEdit() {
        this.list.current.style.display = '';
        this.setState({editTask: null})
    }

    render () {
        return (
          <div class='listBlock'>
                <div class={'list' + (this.state.important == 'Y' ? ' important' : '')} onClick={this.openEdit} ref={this.list} >
                    <input type="checkbox" class='taskChk' checked={this.state.complete} 
                            onChange={this.changeState.bind(this, 'complete')} />
                    <input type="text" class={'taskTitle' + (this.state.important == "Y" ? ' important' : '') 
                            + (this.state.complete ? ' complete' : '')} value={this.props.listData.name} />
                    <i class={this.state.important == 'Y' ? ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                        onClick={this.changeState.bind(this, 'important')}> </i>
                    <i class="fas fa-pen fa-lg icon"></i>
                    <div class='listIcon'>
                        {this.props.listData.date != '' ? <i class="far fa-calendar-alt icon"></i> : ''}
                        {this.props.listData.date != '' ? ` ${this.props.listData.date.substring(5).replace('-', '/')}` : ''}
                        {this.props.listData.file != '' ? <i class="fas fa-file icon"></i> : ''}
                        {this.props.listData.comment != '' ? <i class="far fa-comment-dots icon"></i> : ''}
                    </div>
                </div>
                <div>
                    {this.state.editTask}
                </div>
          </div>  
        );
    }
}

export {List}
