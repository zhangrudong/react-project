import React ,{Component} from 'react'
import { Tabs} from 'antd-mobile';
class Com extends Component{
  constructor(props){
    super(props)
    this.state={
      tabs: [
        { title: '旅游攻略' },
        { title: '出行专题' },
        { title: '房东故事' },
        { title: '热门评论' }
      ]
    }
  }
  componentDidMount(){
    
  }
  render () {
    console.log(this.state.tabs)
    return (
      <div className = "box">
        <header className = "header">
          <Tabs tabs={ this.state.tabs } initialPage={4} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff',activeTab:true }}>
              <ul>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=27&gp=0.jpg" alt="" style={ {width:"3.19rem",height:"1.39rem"} } /><p>哈哈哈哈哈哈哈哈</p><h3><span>2018.3.12</span></h3></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=27&gp=0.jpg" alt="" style={ {width:"3.19rem",height:"1.39rem"} } /><p>哈哈哈哈哈哈哈哈</p><h3><span>2018.3.12</span></h3></li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
          
        </header>
        <div className = "content">发现内容</div>
      </div>
    )
  }
}
export  default Com