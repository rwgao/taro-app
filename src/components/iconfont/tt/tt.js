Component({
  properties: {
    // msnui-dianpu | daishoujine | shangpin | bofang1 | rili | rili1 | rili2 | rili3 | rili4 | rili5 | rili6 | rili7 | rili8 | rili9 | rili10 | rili11 | rili12 | rili13 | rili14 | rili15 | rili16 | rili17 | rili18 | rili19 | rili20 | rili21 | rili22 | rili23 | rili24 | rili25 | rili26 | rili27 | rili28 | rili29 | rili30 | yinle | paihangshuju | zhibohuifang | shanchu | pingtaiguanli | bofang | yinle- | more | diantai
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
