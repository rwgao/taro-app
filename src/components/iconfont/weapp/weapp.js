Component({
  properties: {
    // msnui-dianpu | daishoujine | shangpin | bofang1 | rili | rili1 | rili2 | rili3 | rili4 | rili5 | rili6 | rili7 | rili8 | rili9 | rili10 | rili11 | rili12 | rili13 | rili14 | rili15 | rili16 | rili17 | rili18 | rili19 | rili20 | rili21 | rili22 | rili23 | rili24 | rili25 | rili26 | rili27 | rili28 | rili29 | rili30 | yinle | paihangshuju | zhibohuifang | shanchu | pingtaiguanli | bofang | yinle- | more | diantai
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
