import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import IconFont from '@/components/iconfont'
import styles from './index.module.scss'

export default class Index extends Component {
  render() {
    return (
      <View className={styles.item}>
        <View className={styles.thumbnail}>
          <Image className={styles.pic} />
        </View>
        <View className={styles.content}>
          <View className={styles.names}>
            <Text>名称</Text>
            <Text className={styles.subName}> (名称xx) </Text>
          </View>
          <View className={styles.desc}>
            <Text>描述</Text>
          </View>
        </View>
        <View className={styles.player}>
          <IconFont />
        </View>
        <View className={styles.more}>
          <IconFont />
        </View>
      </View>
    );
  }
}
