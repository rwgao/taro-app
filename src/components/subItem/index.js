import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import styles from "./index.module.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: ""
  };

  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}


  showCount(data) {
    if (data.playcount) {
      if (data.playcount > 99999999) {
        return (data.playcount / 100000000).toFixed(1) + '亿';
      } else if (data.playcount > 9999) {
        return parseInt(data.playcount / 10000) + '万';
      } else {
        return data.playcount;
      }
    }
  }

  render() {
    const { data } = this.props;
    const count = data && data.playcount ? this.showCount(data) : '';
    return (
      <View className={styles.item}>
        <View className={styles.imgWrap}>
          <Image className={styles.img} src={data.picUrl} />
          <View className={styles.num}>
            <IconFont name="bofang1" color="#fff" size={28} />
            <Text>{count}</Text>
          </View>
        </View>
        <View className={styles.itemName}>
          <Text>{data.name}</Text>
        </View>
      </View>
    );
  }
}
