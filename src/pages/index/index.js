import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Home from '../home/index'
import Classify from '../classify/index'
import Cart from '../cart/index'
import My from '../my/index'
import './index.scss';

class Index extends Component {
  constructor() {
    super(...arguments)
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'home/getNoticeList', payload: { category: 1 } })
    dispatch({ type: 'home/getItemList', payload: { ids: [26845, 33185, 29616, 44746, 43741, 39510].toString() } })
  }

  componentDidMount() { }

  componentWillUpdate(nextProps, nextState) { }

  componentDidUpdate(prevProps, prevState) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  handleClick = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'index/save',
      payload: {
        current: value
      }
    })
  }

  render() {
    const { current } = this.props;
    let content = null;
    if (current === 0) {
      content = <Home />;
    } else if (current === 1) {
      content = <Classify />;
    } else if (current === 2) {
      content = <Cart />;
    } else if (current === 3) {
      content = <My />;
    }
    return (
      <View className='index'>
        <View className='content'>
          {content}
        </View>
      </View>
    )
  }
}

export default connect(({ index }) => ({
  ...index
}))(Index)