import React, { Component } from 'react'
import AddTodo from './addTodo.js'
import TodoList from './todoList.js'

import './style.css'

export default class Todo extends Component {
    render() {
        return (
            <div className='todos'>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}