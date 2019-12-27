Component({
  props: {
    // msnui-dianpu | daishoujine | shangpin | bofang1 | rili | rili1 | rili2 | rili3 | rili4 | rili5 | rili6 | rili7 | rili8 | rili9 | rili10 | rili11 | rili12 | rili13 | rili14 | rili15 | rili16 | rili17 | rili18 | rili19 | rili20 | rili21 | rili22 | rili23 | rili24 | rili25 | rili26 | rili27 | rili28 | rili29 | rili30 | yinle | paihangshuju | zhibohuifang | shanchu | pingtaiguanli | bofang | yinle- | more | diantai
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});
