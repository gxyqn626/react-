import React from 'react'

class Add extends React.Component{
    //定义添加评论内容的方法
    addComment = ()=>{
        // 收集数据
        // 整理数据
        // 将数据传到 app.js中的comments
        let username = this.refs.username.value
        let comments = this.refs.comment.value

        // 判断用户输入的内容是否合法
        if(!username||!comments){
            alert('提交的内容不能为空')
        }

        let obj = {
            username,comments
        }
          // 内层组件交给外层
        this.props.add(obj)

        // 清空用户输入的内容
        this.refs.username.value = ''
        this.refs.comment.value = ''
    }

    //定义删除comment的方法
    del = (index)=>{

    }
    render(){
        return(
            <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>用户名</label>
                <input ref="username" type="text" className="form-control" placeholder="用户名" />
              </div>
              <div className="form-group">
                <label>评论内容</label>
                <textarea ref="comment" className="form-control" rows="6" placeholder="评论内容"></textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button onClick={this.addComment}  type="button" className="btn btn-default pull-right">提交</button>
                </div>
              </div>
            </form>
          </div>
        )
    }
}

export default Add