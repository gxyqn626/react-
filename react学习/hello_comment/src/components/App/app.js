import React from 'react'
import Add from '../Add/add'
import List from '../List/list'
import PubSub from 'pubsub-js'

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        // List组件负责显示这个数据
        comments:[
          {username:'众人',comments:'郭祥宇太好看了吧!'},
          {username:'郭祥宇',comments:'我晓得我好看!'},
          {username:'上帝',comments:'你们说的都对'}
        ]
      }
    }

    // componentWillMount(){
    //   PubSub.subscribe('message',(msg,data)=>{
    //     console.log(msg,data)
    //     let {comments} = this.state
    //   comments.splice(data,1);
    //   //更新状态
    //   this.setState({comments})
    //   })
    // }

// 定义添加comment的函数
  add = (comment)=>{
      let {comments} = this.state
      comments.unshift(comment)
      this.setState({comments}) //更新一下状态
  }
  del = (index)=>{
    let {comments} = this.state
    comments.splice(index,1);
    //更新状态
    this.setState({comments})
  }
    render(){
      let {comments} = this.state;
        return(
            <div>
   <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
            <Add add = {this.add}/>
            <List comments={comments}  del={this.del} />
        </div>
      </div>
            </div>
        )
    }
}

export default App