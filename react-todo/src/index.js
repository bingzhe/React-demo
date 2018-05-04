import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'

{/* <Provider store={store}>
</Provider>  */}
ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
)