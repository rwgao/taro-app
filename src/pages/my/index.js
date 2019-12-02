import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtTabBar } from 'taro-ui'
import './index.scss';

class Home extends Component {
  render() {
    return (
      <View className='home'>
        My
      </View>
    )
  }
}

function mapStateToProps({ home }) {
  return {
    ...home
  }
}

export default connect(mapStateToProps)(Home);