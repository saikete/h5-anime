const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    backImage: {
      type: String,
      value: "../../assets/images/nav/nav-back.svg",
    },
    homeImage: {
      type: String,
      value: "../../assets/images/nav/nav-home.svg",
    },
    homePage: {
      type: String,
      value: "/pages/vip/vip",
    },
    extClass: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    background: {
      type: String,
      value: "#ffffff",
    },
    color: {
      type: String,
      value: "#000000",
    },
    backPage: {
      type: String,
      value: "",
    },
    showBack: {
      type: Boolean,
      value: false,
    },
    showHome: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // showBack: false,
    support: false,
  },
  attached: function attached() {
    this.getMenuInfo();
    //back箭头处理的显示
    let pages = getCurrentPages();
    let page = this.data.backPage;
    if (pages.length == 1 && page.length == 0) {
      this.setData({
        showHome: true,
      });
      this.triggerEvent("page-from", false);
    } else {
      this.setData({
        showBack: true,
      });
      this.triggerEvent("page-from", true);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击back事件处理
    goBack: function () {
      // let pages = getCurrentPages();
      // let page = this.data.backPage;
      // if (pages.length > 1) {
      //   // 正常返回
      //   wx.navigateBack();
      // } else {
      //   // 配置返回页
      //   wx.reLaunch({
      //     url: page,
      //   });
      // }
      this.triggerEvent("back");
    },
    //返回首页
    goHome: function () {
      // let page = this.data.homePage;
      // wx.reLaunch({
      //   url: page
      // })
      this.triggerEvent("home");
    },
    getMenuInfo() {
      var that = this;
      var rect = wx.getMenuButtonBoundingClientRect
        ? wx.getMenuButtonBoundingClientRect()
        : null;
      if (rect.height == 0 || rect.left == 0 || rect.top == 0) {
        setTimeout(() => {
          that.getMenuInfo();
        }, 100);
      } else {
        that.getInfo(rect);
      }
    },
    getInfo(rect) {
      let that = this;
      wx.getSystemInfo({
        success: function success(res) {
          var ios = !!(res.system.toLowerCase().search("ios") + 1);
          // 获取当前基础库
          var version = res.SDKVersion.split(".").join("");
          var support = version > 242;
          var menuH = 0;
          var menuR = 0;
          var gap = 0;
          if (rect) {
            menuH = rect.height;
            menuR = res.windowWidth - rect.left;
            gap = rect.top - res.statusBarHeight;
          } else {
            // 获取不到胶囊的值
            menuH = 32;
            menuR = 97;
            gap = ios ? 6 : 8;
          }
          var bottomSpace = gap + 4;
          var topBarHeight = res.statusBarHeight + menuH + gap + bottomSpace;
          that.setData({
            statusBar: "height:" + res.statusBarHeight + "px",
            gap,
            bottomSpace,
            barInnerH: "height:" + menuH + "px",
            menuH,
            menuR,
            support,
            ios,
          });
          app.globalData.barHeight = topBarHeight;
          that.triggerEvent("getBarInfo", {
            topBarHeight,
          });
        },
      });
    },
  },
});
