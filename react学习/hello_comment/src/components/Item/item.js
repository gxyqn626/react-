import React from 'react'
import PubSub from 'pubsub-js'

class Item extends React.Component{
    delComment = ()=>{
        console.log(this.props.index)
        if(window.confirm(`你确定删除${this.props.comment.username}吗`)){
            this.props.del(this.props.index)

            //发布消息
            // PubSub.publish('message',this.props.index)
        }
     
    }
    render(){
        let {comment} = this.props;
        return(
            <li className="list-group-item">
                <div className="handle">
                    <button  onClick={this.delComment} >删除</button>
                </div>
                <p className="user"><span>{comment.username}</span><span>说</span></p>
                <p className="centence">{comment.comments}</p>
            </li>
        )
    }
}

export default Item