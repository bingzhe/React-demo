import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './todoItem.js'
import { toggleTodo, removeTodo } from '../actions.js'
import { FilterTypes } from '../../constants.js';

class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.todos.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                completed={item.completed}
                                onToggle={() => { this.props.onToggleTodo(item.id) }}
                                onRemove={() => { this.props.onRemoveTodo(item.id) }}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}


const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.All:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupported filter')
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
