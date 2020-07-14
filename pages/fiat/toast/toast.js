Page({
  data: {
    isToastSpinVisible: false,
    isToastWarningVisible: false,
    isToastIconVisible: false,
    isToastCustomVisible: false,
    isToastSnackbarVisible: false,
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
  },
  showToastSnackbar() {
    this.setData({ isToastSnackbarVisible: true })
  },
  hideToastSnackbar() {
    my.alert({ title: 'Toast snackbar', content: 'this is onHide callback', buttonText: 'Okay' })
    this.setData({ isToastSnackbarVisible: false }) 
  },
  handleToastSnackbarAction() {
    my.alert({ title: 'Toast snackbar', content: 'this is onAction callback', buttonText: 'Okay' })
  },

  saveToastRef(ref) {
    this.toastRef = ref
  },
  handleToastRefSpin() {
    this.toastRef.spin()
  }
});
