import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import Item from "./components/item";

import styles from "./index.module.scss";

class Recommend extends Component {
  state = {};

  componentWillMount() {}
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: "recommend/getRecommendResource", payload: {} });
  }
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}

  config = {
    navigationBarTitleText: "每日推荐"
  };

  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    const { data } = this.props;
    return (
      <View className={styles.recomment}>
        <View>播放全部</View>
        <ScrollView>
          111
          <Item />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps({ recommend }) {
  return {
    data: recommend.recommendList
  };
}

export default connect(mapStateToProps)(Recommend);
