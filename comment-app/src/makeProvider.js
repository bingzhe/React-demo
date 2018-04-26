import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default (data) => {
    return (WrappedComponent) => {
        return class extends Component {
            static childContextTypes = {
                themeColor: PropTypes.string
            }

            constructor(props) {
                super(props)
                this.state = {
                    content: data
                }
            }

            getChildContext() {
                return { data: this.state.data }
            }


            render() {
                return (
                    <WrappedComponent {...this.props} />
                )
            }
        }
    }
}







Post = makeProvider({ name: 'Jerry' })(Post)