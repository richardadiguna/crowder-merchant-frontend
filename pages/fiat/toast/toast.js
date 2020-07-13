Page({
  data: {
    isToastSpinVisible: false,
    isToastWarningVisible: false,
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
  }
});
