import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import styles from "./classify.module.scss";

export default class Index extends Component {
  handleNavigateTo(option) {
    Taro.navigateTo({
      url: option.url,
      ...option
    });
  }
  render() {
    return (
      <View className={styles.content}>
        <View className={styles.item} onClick={() => this.handleNavigateTo({ url: '/pages/recommend/index' })}>
          <View className={styles.iconWrap}>
            <IconFont size={48} color="#fff" name="rili" />
          </View>
          <View className={styles.text}>
            <Text>每日推荐</Text>
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.iconWrap}>
            <IconFont size={48} color="#fff" name="yinle-" />
          </View>
          <View className={styles.text}>
            <Text>歌单</Text>
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.iconWrap}>
            <IconFont size={48} color="#fff" name="paihangshuju" />
          </View>
          <View className={styles.text}>
            <Text>排行</Text>
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.iconWrap}>
            <IconFont size={48} color="#fff" name="diantai" />
          </View>
          <View className={styles.text}>
            <Text>电台</Text>
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.iconWrap}>
            <IconFont size={48} color="#fff" name="zhibohuifang" />
          </View>
          <View className={styles.text}>
            <Text>直播</Text>
          </View>
        </View>
      </View>
    );
  }
}
