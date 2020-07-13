Page({
  data: {
    isToastSpinVisible: false,
    isToastWarningVisible: false,
    isToastIconVisible: false,
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
  }
});
