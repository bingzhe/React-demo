import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// class LikeButton extends Component {
//     constructor() {
//         super()
//         this.state = { isLiked: false }
//     }

//     handleClickOnLikeButton() {
//         this.setState({
//             isLiked: !this.state.isLiked
//         })
//     }


//     render() {
//         const likeText = this.props.likeText || '点赞'
//         const unlikeText = this.props.unlikeText || '取消'
//         return (
//             <button onClick={this.handleClickOnLikeButton.bind(this)}>
//                 {this.state.isLiked ? unlikeText : likeText}
//             </button>
//         )
//     }
// }



// class Index extends Component {
//     constructor() {
//         super()
//         this.state = {
//             likedText: '已赞',
//             unlikedText: '赞'
//         }
//     }
//     handleClickOnChange() {
//         this.setState({
//             likedText: '取消',
//             unlikedText: '点赞'
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <LikeButton likeText={this.state.likedText} unlikeText={this.state.unlikedText} />
//                 <button onClick={this.handleClickOnChange.bind(this)}>修改</button>
//             </div>
//         )
//     }
// }

// class Computer extends Component {
//     constructor() {
//         super()
//         this.state = { status: 'off', showContent: '无内容' }
//     }
//     changeStatus() {
//         let newStatus
//         let newContent

//         if (this.state.status === 'off') {
//             newStatus = 'on'
//             newContent = '显示器亮了'
//         } else {
//             newStatus = 'off'
//             newContent = '显示器关了'
//         }

//         this.setState({
//             status: newStatus,
//             showContent: newContent
//         })


//     }
//     render() {
//         return (
//             <div>
//                 <Screen showContent={this.state.showContent} />
//                 <button onClick={this.changeStatus.bind(this)}>开关{this.state.status}</button>
//             </div>
//         )
//     }
// }

// class Screen extends Component {
//     static defaultProps = {
//         showContent: '无内容'
//     }

//     render() {
//         return (
//             <div className='screen'>{this.props.showContent}</div>
//         )
//     }
// }

// const lessons = [
//     { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//     { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//     { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//     { title: 'Lesson 4: title', description: 'Lesson 4: description' }
// ]
// class Lesson extends Component {
//     handlerClick() {
//         console.log(this.props.i + '-' + this.props.lesson.title)
//     }
//     render() {
//         const { lesson } = this.props
//         return (
//             <div onClick={this.handlerClick.bind(this)}>
//                 <h1>{lesson.title}</h1>
//                 <p>{lesson.description}</p>
//             </div>
//         )
//     }
// }

// class LessonsList extends Component {
//     render() {
//         return (
//             <div>
//                 {lessons.map((item, index) => { return <Lesson lesson={item} i={index} key={index} /> })}
//             </div>
//         )
//     }
// }

// class Input extends Component {
//     constructor() {
//         super()
//         this.state = {
//             number: ""
//         }
//     }
//     handlerNumberChange(e) {
//         this.setState({
//             number: e.target.value
//         })
//         this.props.onSubmit(e.target.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input type='number' value={this.state.number}
//                     onChange={this.handlerNumberChange.bind(this)} />
//             </div>
//         )
//     }
// }

// class PercentageShower extends Component {
//     render() {
//         return (
//             <div>{this.props.number}%</div>
//         )
//     }
// }

// class PercentageApp extends Component {
//     constructor() {
//         super()
//         this.state = {
//             number: ''
//         }
//     }

//     handerSubmit(number) {
//         let n = (number * 100).toFixed(2)
//         this.setState({
//             number: n
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Input onSubmit={this.handerSubmit.bind(this)} />
//                 <PercentageShower number={this.state.number} />
//             </div>
//         )
//     }
// }
// class Clock extends Component {
//     constructor() {
//         super()
//         this.state = {
//             date: new Date()
//         }
//     }

//     componentWillMount() {
//         this.timer = setInterval(() => {
//             this.setState({ date: new Date() })
//         }, 1000)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     <p>现在的时间是</p>
//                     {this.state.date.toLocaleTimeString()}
//                 </h1>
//             </div>
//         )
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
// }


// class Index extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isShowClock: true
//         }
//     }

//     handlerTrggleClick() {
//         this.setState({
//             isShowClock: !this.state.isShowClock
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.isShowClock ? <Clock /> : null}
//                 <button onClick={this.handlerTrggleClick.bind(this)}>切换</button>
//             </div>
//         )
//     }
// }

// class Post extends Component {
//     constructor() {
//         super()
//         this.state = {
//             content: ""
//         }
//     }
//     getContent() {
//         getPostData().then((postContent) => {
//             this.setState({
//                 content = postContent
//             })
//         })
//     }
//     componentWillMount() {
//         this.setState({
//             content: '数据加载中...'
//         })
//         this.getCOntent()
//     }
//     reload() {
//         this.getCOntent()
//     }
//     render() {
//         return (
//             <div>
//                 <div className='post-content'>{this.state.content}</div>
//                 <button onClick={this.reload.this(bind)}>刷新</button>
//             </div>
//         )
//     }
// }

// const getDefaultStyledPost = (defaultStyle) => {
//     /* TODO */
//     class Post extends Component {
//         render() {
//             const style={...defaultStyle,...this.props.style}
//             return(
//                 <p style={style}></p>
//             )
//         }
//     }
// }

class CommentList extends React.component {

}

const CommentListWithSubscription = withSubscription(
    CommentList, (DataSource) => DataSource.getComments()
)

class Post extends Component {
    static defaultProps = {
        content: 'aaa'
    }
    getEleHieght() {
        console.log(this.paContent.clientHeight)
    }
    render() {
        return (
            <p
                ref={(p) => this.paContent = p}
                onClick={this.getEleHieght.bind(this)}
            >
                {this.props.content}
            </p>
        )
    }
}


ReactDOM.render(
    <Post />,
    document.getElementById('root')
)
