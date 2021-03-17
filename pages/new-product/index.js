import providers from '/data/providers'

Page({
  data: {
    title: "Register Crowder",
    providers,
    providersSearchResult: [],
    isSearch: false,
  },

  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({ providersSearchResult: this.data.providers })
  },
  onReady() {},
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {},
  onReachBottom() {
    // Page is pulled to the bottom
  },
  register() {
    my.navigateTo({
      url: '/pages/home-screen/home-screen'
    });
  }
});