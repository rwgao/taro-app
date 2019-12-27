import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from  './index.module.scss'

class Banner extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'home/getHomeBanner', payload: { type: 1 } })
  }

  render() {
    const { bannerList } = this.props;
    return (
      <View className={styles['swiper-wrap']}>
        <View className={styles.swiperBox}>
        <Swiper
          className={styles.swiper}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
        // autoplay
        >
          {
            bannerList && bannerList.map(item => (
              <SwiperItem key={item} className={styles['swiper-item']}>
                <View className={styles['swiper-item']}>
                  <Image
                    className={styles['swiper-img']}
                    mode='scaleToFill'
                    src={item.pic}
                  />
                </View>
              </SwiperItem>
            ))
          }
        </Swiper>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ home }) {
  return {
    bannerList: home.bannerList
  }
}

export default connect(mapStateToProps)(Banner)