import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Text } from '@tarojs/components'
import './index.scss'

export default class NoticeSwiper extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    const { data } = this.props;
    return (
      <View className='notice'>
        <View className='notice-left'>
          <View>
            <Text> 继承</Text>
          </View>
          <View>
            <Text className='color-orange'> 快报</Text>
          </View>
          <View>
            <Text>:</Text>
          </View>
        </View>
        <View className='notice-list'>
          <Swiper
            className='swiper-notice'
            circular
            vertical
            autoplay
          >
            {
              data.map(item => (
                <SwiperItem key={item.id}>
                  <View className='swiper-notice-item'>
                    <Text>{item.title}</Text>
                  </View>
                </SwiperItem>
              ))
            }
          </Swiper>
        </View>
        <View className='notice-right'>
          <Text>| 更多</Text>
        </View>
      </View>
    )
  }
}