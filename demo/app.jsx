import React from 'react';
import ReactDOM from 'react-dom';

let data = [
    {id: 1, name: '京城五', message: '我的天'},
    {id: 2, name: '阿琳', message: '你是不是欠揍'},
    {id: 3, name: '韓市長', message: '發大財'},
    {id: 4, name: '胖哥哥', message: '採草莓了'},
    {id: 5, name: '上帝', message: '7777'},
];


class Message extends React.Component {
    render() {
        let divstyle = {marginBottom: 20};
        return (
            <div style={divstyle}>
                <span>{this.props.name}簡訊： </span>
                <span>{this.props.message}</span>
            </div>
        );
    }
}

class MessageBlock extends React.Component {
    render() {
        let message = this.props.data.map((item) => {
           if (item.name.indexOf(this.props.searchValue) != -1) 
           return <Message key={item.id} name={item.name} message={item.message} />
        });

        return (
            <div>
                {message}
            </div>
        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <div>
                <span>簡訊紀錄:</span>
                <input type="text" value={this.props.searchValue} onChange={this.props.searchName}/>
            </div>
        );
    }
}

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
        this.searchName = this.searchName.bind(this);
    }

    searchName(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <Search searchValue={this.state.name} searchName={this.searchName}/>
                <hr/>
                <MessageBlock data={this.props.data} searchValue={this.state.name}/>
            </div>
        );
    }
}

ReactDOM.render(<MessageForm data={data}/>, document.getElementById('root'));


