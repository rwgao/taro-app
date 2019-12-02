import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class NoticeSwiper extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    return (
      <View className='item-content'>
        <View className='item-title'>
          <Text>标题</Text>
        </View>
        <View className='item-list'>
          {
            data.map(item => (
              <View className='item-item' key={item.id}>
                <View className='item-img-wrap'>
                  <Image className='item-img' src={item.mainImage} />
                </View>
                <View className='item-name'>
                  <Text>
                    {item.name}
                  </Text>
                </View>
                <View className='item-price'>
                  <Text>
                    ￥ {item.lowPrice}
                  </Text>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}