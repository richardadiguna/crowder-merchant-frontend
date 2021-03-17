Page({
  data: {
    tabs: [
      {
        title: 'Listing Item',
        badgeType: 'text',
        badgeText: '6',
      },
      {
        title: 'My Orders',
      },
      {
        title: 'Draft Items',
      },
    ],
    activeTab: 1,
  },
  
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
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

  // onShareAppMessage() {
  //   // Back to custom sharing information
  //   return {
  //     title: 'DANA Mini Biller Template',
  //     desc: 'DANA Mini Program tempalate for bill payment',
  //     path: 'pages/index/index',
  //   };
  // },

  // onSearchInput(e)  {
  //   const searchKey = e.detail.value || ''
  //   const lowerCaseSearchKey = searchKey.toLowerCase()
  //   const filtered = this.data.providers.filter(provider => {
  //     const lowerCaseProviderName = provider.name.toLowerCase()
  //     if (lowerCaseProviderName.indexOf(lowerCaseSearchKey) !== -1) {
  //       return provider
  //     }
  //   })
  //   if (searchKey) {
  //     this.setData({ 
  //       providersSearchResult: filtered,
  //       isSearch: true,
  //     })
  //   } else {
  //     this.setData({
  //       providersSearchResult: this.data.providers,
  //       isSearch: false,
  //     })
  //   }
  // },
});