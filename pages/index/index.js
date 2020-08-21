import denoms from '/data/denoms'
import providers from '/data/providers'

Page({
  data: {
    selectedProvider: null,
    generalErrorMessage: `
      We can’t process your customer number right now. Give it a try later, perhaps? 
    `,
    cutOffTimeErrorMessage: `
      Your transaction cannot be processed right now. Please try again after 01.00 AM.
    `,
    providers,
    providersSearchResult: [],
    isSearch: false,

    helpDialogMessage: `
      Hubungi call center kantor pembiayaan anda.
      Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
      Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
    `,
    denoms: [],
    customerNumberLoading: false,
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

  onProviderSelect(selectedProvider) {
    this.setData({ selectedProvider, denoms: [] })
  },

  onProviderReset() {
    this.setData({ selectedProvider: null })
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

  saveCutOffTimeErrorSheetRef(ref) {
    this.cutOffTimeErrorSheetRef = ref
  },
  showCutOffTimeError() {
    this.cutOffTimeErrorSheetRef.show()
  },
  hideCutOffTimeError() {
    this.cutOffTimeErrorSheetRef.hide()
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

  saveHelpDialogRef(ref) {
    this.helpDialogRef = ref
  },
  openHelpDialog() {
    this.helpDialogRef.show()
  },
  closeHelpDialog() {
    this.helpDialogRef.hide()
  },

  onCustomerNumberInput(e) {
    const { value } = e.detail

    clearTimeout(this.customerNumberTimer)
    this.setData({ customerNumberLoading: true })
    this.customerNumberTimer = setTimeout(() => {
      if (value) {
        this.setData({ denoms, customerNumberLoading: false })
      } else {
        this.setData({ denoms: [], customerNumberLoading: false })
      }
    }, 500)
  },
});