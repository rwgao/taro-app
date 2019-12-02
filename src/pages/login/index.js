import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtAvatar } from 'taro-ui'
import './index.scss';

class Index extends Component {
  constructor() {
    super(...arguments)
  }

  componentWillMount() { }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'login/login' })
  }

  componentWillUpdate(nextProps, nextState) { }

  componentDidUpdate(prevProps, prevState) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    const { userInfo } = this.props;
    return (
      <View className='login'>
        <View>
          <AtAvatar circle image={userInfo.avatarUrl}></AtAvatar>
        </View>
        <View className='content'>

        </View>
      </View>
    )
  }
}

export default connect(({ login }) => ({
  ...login
}))(Index)