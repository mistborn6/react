import React from 'react'
import ReactDOM from 'react-dom'
import {store, addMessage} from './index.js'
import {Provider, connect} from 'react-redux'


// React

class InputMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: '',
        }
        this.newMessage = this.newMessage.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    newMessage(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    clearMessage() {
        this.setState({name: '', message: ''})
    }

    submitMessage() {
        let messageData = {
            key: '',
            name: this.state.name,
            message: this.state.message,
        };
        this.props.addMessage(messageData);
        this.clearMessage();
    }

    render() {
        return (
        <div>
            <label>暱稱:
                <input type='text' name='name' value={this.state.name} onChange={this.newMessage} /> 
            </label>  
            <br/>
            <label>新簡訊:
                <textarea name='message' value={this.state.message} onChange={this.newMessage}></textarea>
            </label>
            <br/>
            <button onClick={this.submitMessage}>送出</button>
        </div>
        );
    }
}


class MessageList extends React.Component {
    render() {
        let message = this.props.data.map((item)=>{
           return <li key={item.key}>{item.name}簡訊{item.message}</li> 
        });
        return (
            <ul>
                {message}
            </ul>
        );
    }
}




class MessageForm extends React.Component {
    render() {
        return (
            <div>
                <InputMessage addMessage={this.props.addMessage}/>
                <MessageList data={this.props.data}/>
            </div>
        );
    }
}

// React-redux

const mapStateToProps = state => {
    return {data: state.message};
}

const mapDispatchToProps = dispatch => {
    return {addMessage: article => dispatch(addMessage(article))};
}


const ConnectForm = connect(mapStateToProps, mapDispatchToProps)(MessageForm);


ReactDOM.render(<Provider store={store}><ConnectForm /></Provider>, document.getElementById('root'));


