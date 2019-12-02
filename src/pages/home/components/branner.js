import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class Branner extends Component {
  static defaultProps = {
    data: [
      'https://image.jcfor.com/2019/04/14/2f0e7f8a-136f-44ae-9090-a23ec7d03203.png',
      'https://image.jcfor.com/2019/04/14/99756554-d318-453e-bf06-66ff00f95a8e.png',
      'https://image.jcfor.com/2019/04/14/b5604ef4-2755-43b0-bec8-b3048f990281.png',
      'https://image.jcfor.com/2019/04/14/3ba4ca02-c1fe-493a-bf2b-a7b2e7279770.png',
      'https://image.jcfor.com/2019/04/14/5dab2219-c441-4019-8b17-9c6af49af490.png'
    ]
  }
  render() {
    const { data } = this.props;
    return (
      <View className='swiper-wrap'>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
        // autoplay
        >
          {
            data.map(item => (
              <SwiperItem key={item} className='swiper-item'>
                <View className='swiper-item'>
                  <Image
                    className='swiper-img'
                    mode='scaleToFill'
                    src={item}
                  />
                </View>
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
    )
  }
}