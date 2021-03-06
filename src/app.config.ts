export default {
  pages: ["pages/home/index", "pages/user/index"],
  tabBar: {
    color: "#888888",
    selectedColor: "#37ad70",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "pages/home/index",
        text: "้ฆ้กต",
        iconPath: "images/icon-home.png",
        selectedIconPath: "images/icon-home-fill.png",
      },
      {
        pagePath: "pages/user/index",
        text: "ๆ็",
        iconPath: "images/icon-user.png",
        selectedIconPath: "images/icon-user-fill.png",
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
