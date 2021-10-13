export default {
  pages: ["pages/home/index", "pages/user/index"],
  tabBar: {
    color: "#808080",
    selectedColor: "#37ad70",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
