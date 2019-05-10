import React from 'react'
import ReactDOM from 'react-dom'
import store from './index.js'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

// React
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
            <Provider store={store}>
                <List /> 
            </Provider>
        );
    }
}

// React-redux

const mapStateToProps = state => {
    return {data: state.message};
}

const List = connect(mapStateToProps)(MessageList);


ReactDOM.render(<MessageForm />, document.getElementById('root'));