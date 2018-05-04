import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class TodoItem extends Component {
    static PropTypes = {
        onToggle: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const checkedProp = this.props.completed ? { checked: true } : {}
        return (
            <li
                className='todo-item'
                style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
            >
                <input
                    className='toggle'
                    type='checkbox'
                    {...checkedProp}
                    onClick={this.props.onToggle}
                />
                <label className='text'>{this.props.text}</label>
                <button
                    className='remove'
                    onClick={this.props.onRemove}
                >X</button>
            </li>
        )
    }
}

export default TodoItem