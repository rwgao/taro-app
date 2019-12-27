import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import SubItem from "@/components/subItem";
import styles from "./index.module.scss";

class News extends Component {
  config = {
    navigationBarTitleText: ""
  };

  state = {
    type: 1
  };

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}

  handleClickTab(val) {
    this.setState({
      type: val
    });
  }

  render() {
    const { type } = this.state;
    let { recommendList } = this.props;
    return (
      <View className={styles.news}>
        <View className={styles.titleWrap}>
          <View className={styles.title}>
            <View
              className={type === 1 ? styles.textActive : styles.text}
              onClick={() => this.handleClickTab(1)}
            >
              <Text>新歌</Text>
            </View>
            <View className={styles.line}>|</View>
            <View
              className={type === 2 ? styles.textActive : styles.text}
              onClick={() => this.handleClickTab(2)}
            >
              <Text>新碟</Text>
            </View>
          </View>
          <View className={styles.btns}>
            {type === 1 ? (
              <View className={styles.operaBtn}>
                <Text>新歌推荐</Text>
              </View>
            ) : (
              <View className={styles.operaBtn}>
                <Text>更多新碟</Text>
              </View>
            )}
          </View>
        </View>
        <View className={styles.container}>
          {recommendList &&
            recommendList.map(item => <SubItem key={item.id} data={item} />)}
        </View>
      </View>
    );
  }
}

function mapStateToProps({ home }) {
  return {
    recommendList: home.recommendList
  };
}

export default connect(mapStateToProps)(News);
