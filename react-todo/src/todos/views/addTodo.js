import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';

class AddTodo extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(ev) {
        ev.preventDefault();

        const input = this.textInput;
        if (!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" type="text" ref={input => this.textInput = input} />
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: text => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);