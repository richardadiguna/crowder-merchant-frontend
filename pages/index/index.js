import providers from '/data/providers'

Page({
  data: {
    generalErrorMessage: `
      We can’t process your customer number right now. Give it a try later, perhaps? 
    `,
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
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'DANA Mini Biller Template',
      desc: 'DANA Mini Program tempalate for bill payment',
      path: 'pages/index/index',
    };
  },

  saveToastRef(ref) {
    this.toastRef = ref
  },
  showConnectionUnstableError() {
    this.toastRef.warning('The network connection is unstable. Please try again later.', {
      snackbar: true,
      actionText: 'OKAY',
    })
  },

  saveGeneralErrorSheetRef(ref) {
    this.generalErrorSheetRef = ref
  },
  showGeneralError() {
    this.generalErrorSheetRef.show()
  },
  hideGeneralError() {
    this.generalErrorSheetRef.hide()
  },

  onSearchInput(e)  {
    const searchKey = e.detail.value || ''
    const lowerCaseSearchKey = searchKey.toLowerCase()
    const filtered = this.data.providers.filter(provider => {
      const lowerCaseProviderName = provider.name.toLowerCase()
      if (lowerCaseProviderName.indexOf(lowerCaseSearchKey) !== -1) {
        return provider
      }
    })
    if (searchKey) {
      this.setData({ 
        providersSearchResult: filtered,
        isSearch: true,
      })
    } else {
      this.setData({
        providersSearchResult: this.data.providers,
        isSearch: false,
      })
    }
  },
});