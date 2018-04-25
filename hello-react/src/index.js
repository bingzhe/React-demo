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

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends Component {
    handlerClick() {
        console.log(this.props.i + '-' + this.props.lesson.title)
    }
    render() {
        const { lesson } = this.props
        return (
            <div onClick={this.handlerClick.bind(this)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

class LessonsList extends Component {
    render() {
        return (
            <div>
                {lessons.map((item, index) => { return <Lesson lesson={item} i={index} key={index} /> })}
            </div>

        )
    }
}

ReactDOM.render(
    <LessonsList />,
    document.getElementById('root')
)
