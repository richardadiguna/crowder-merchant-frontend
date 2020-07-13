Page({
  data: {
    isToastSpinVisible: false,
    isToastWarningVisible: false,
    isToastIconVisible: false,
    isToastCustomVisible: false,
  },
  onLoad() {},
  handleToastSpin() {
    this.setData({ isToastSpinVisible: true })
  },
  showToastWarning() {
    this.setData({ isToastWarningVisible: true })
  },
  hideToastWarning() {
    this.setData({ isToastWarningVisible: false }) 
  },
  showToastIcon() {
    this.setData({ isToastIconVisible: true })
  },
  hideToastIcon() {
    this.setData({ isToastIconVisible: false }) 
  },
  showToastCustom() {
    this.setData({ isToastCustomVisible: true })
  },
  hideToastCustom() {
    my.alert({ title: 'Toast callback', content: 'this is toast callback content', buttonText: 'Okay' })
    this.setData({ isToastCustomVisible: false }) 
  }
});
