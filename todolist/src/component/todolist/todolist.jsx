import React from 'react'
import {connect} from 'react-redux'
import {List} from '../list'

class ConnectTodoList extends React.Component {
    render () {
        let Lists = this.props.data.map((item) => {
            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                {Lists}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {data: state};
}

const TodoList = connect(mapStateToProps)(ConnectTodoList)

export {TodoList}
