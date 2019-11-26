import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss';

class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '首页',
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  add = (e) => {
    // dosth
    const { dispatch } = this.props;
    dispatch({ type: 'index/add', payload: Math.random() })
  }

  render () {
    const { list } = this.props;
    return (
      <View className='index'>
        <View className='title'>{this.state.title}</View>
        <View className='content'>
          {list.map(item => {
            return (
              <View key={item} className='item'><Text>{item}</Text></View>
            )
          })}
          <Button className='add' onClick={this.add}>添加</Button>
          <AtButton>添加</AtButton>
        </View>
      </View>
    )
  }
}

export default connect(({ index }) => ({
  ...index
}))(Index)