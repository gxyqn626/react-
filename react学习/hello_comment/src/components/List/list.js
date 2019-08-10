import React from 'react'
import Item from '../Item/item'

class List extends React.Component{
    render(){
        let {comments} = this.props
        let display = comments.length>0?'none':'block'
        console.log(display)
        return(
            <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {
                    comments.map((item,index)=>{
                        return <Item key={index} comment={item} index={index} del={this.props.del} />
                    })
                }
            </ul>
          </div>
        )
    }
}

export default List