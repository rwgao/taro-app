import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from '@tarojs/redux'
import SubItem from '@/components/subItem'
import styles from './index.module.scss'

class Recommend extends Component {
  config = {
    navigationBarTitleText: ""
  };

  state = {};

  componentWillMount() {}
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'home/getRecommendResource' })
  }
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    let { recommendList } = this.props;
    recommendList.shift()
    return (
      <View className={styles.recommend}>
        <View className={styles.title}>
          <Text className={styles.text}>推荐歌单</Text>
          <View className={styles.operaBtn}>
              <Text>歌单广场</Text>
          </View>
        </View>
        <View className={styles.container}>
          {
            recommendList && recommendList.map(item => <SubItem key={item.id} data={item} />)
          }
        </View>
      </View>
    );
  }
}

function mapStateToProps({ home }) {
  return {
    recommendList: home.recommendList
  }
}

export default connect(mapStateToProps)(Recommend);