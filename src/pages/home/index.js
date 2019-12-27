import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import Branner from './components/branner'
import Classify from './components/classify'
import Recommend from './components/recommend'
import News from './components/news'
import styles from './index.module.scss';

class Home extends Component {
  render() {
    return (
      <View className={styles.home}>
        <Branner />
        <Classify />
        <Recommend />
        <News />
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