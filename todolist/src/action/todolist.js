import {ADD_TODOLIST} from '../constant/todoaction-type.js'

export const addTodolist = todolist => ({
    type: ADD_TODOLIST, payload: todolist,
})
