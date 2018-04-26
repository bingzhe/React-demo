import React, { Component } from 'react'

export default (url) => {
    return (WrappedComponent) => {
        return class extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    content: null
                }
            }

            componentWillMount() {
                this._loadData()
            }
            _loadData() {
                this.setState({
                    content: '数据加载中...'
                })
                getData(url).then(resp => {
                    if (resp) {
                        this.setState({
                            content: resp
                        })
                    }
                })
            }
            render() {
                return (
                    < WrappedComponent
                        content={this.state.content}
                        refresh={this._loadData.bind(this)}
                        {...this.props}
                    />
                )
            }
        }
    }
}