import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtAvatar, AtIcon } from 'taro-ui'
import './index.scss';

class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      loginBy: '',
      password: '',
    }
  }

  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUpdate(nextProps, nextState) { }

  componentDidUpdate(prevProps, prevState) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return val
  }

  onSubmit (event) {
    console.log(event)
    const { loginBy } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'login/checkCellPhone', 
      payload: {
        phone: loginBy,
      }
    })
    this.handleLogin()
  }

  onReset (event) {
    console.log(event)
  }

  handleLogin = () => {
    const { loginBy, password } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'login/login', 
      payload: {
        phone: loginBy,
        password: password,
      }
    })
  }


  render() {
    const { loginBy, password } = this.state;
    return (
      <View className='login'>
        <View className='login-content'>
          <AtForm 
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            <View className='form-item'>
              <View className='lable-icon'>
                <AtIcon value='user' />
              </View>
              <View className='form-content'>
                <AtInput
                  placeholder='请输入用户名'
                  name='loginBy'
                  border={false}
                  value={loginBy}
                  onChange={(val) => this.handleChange('loginBy', val)}
                />
              </View>
            </View>
            <View className='form-item'>
              <View className='lable-icon'>
                <AtIcon value='lock' />
              </View>
              <View className='form-content'>
                <AtInput
                  placeholder='请输入密码'
                  border={false}
                  name='password'
                  type='password'
                  value={password}
                  onChange={(val) => this.handleChange('password', val)}
                />
              </View>
            </View>
            <View className='forget-pwd'>
              <Text>注册新用户</Text>
              <Text>忘记密码</Text>
            </View>
            <AtButton type='primary' formType='submit'>登录</AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}

export default connect(({ login }) => ({
  ...login
}))(Index)