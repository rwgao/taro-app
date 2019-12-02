import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtTabBar } from 'taro-ui'
import Branner from './components/branner'
import NoticeSwiper from './components/notice'
import Hot from './components/hot'
import './index.scss';

class Home extends Component {
  render() {
    const { noticeList, itemList } = this.props;
    return (
      <View className='home'>
        <Branner />
        <NoticeSwiper data={noticeList} />
        <Hot data={itemList} />
      </View>
    )
  }
}

function mapStateToProps({ home }) {
  return {
    noticeList: home.noticeList,
    itemList: home.itemList,
  }
}

export default connect(mapStateToProps)(Home);