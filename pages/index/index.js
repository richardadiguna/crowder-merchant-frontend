const denoms = [
  {
    denom: { amount: '20.000' },
    price: { amount: '21.500', currency: 'Rp' },
  },
  {
    denom: { amount: '50.000' },
    price: { amount: '51.500', currency: 'Rp' },
  },
  {
    denom: { amount: '100.000' },
    price: { amount: '101.500', currency: 'Rp' },
  },
  {
    denom: { amount: '200.000' },
    price: { amount: '201.500', currency: 'Rp' },
  },
  {
    denom: { amount: '500.000' },
    price: { amount: '501.500', currency: 'Rp' },
  },
  {
    denom: { amount: '1.000.000' },
    price: { amount: '1.001.500', currency: 'Rp' },
  },
  {
    denom: { amount: '5.000.000' },
    price: { amount: '5.001.500', currency: 'Rp' },
  },
]

Page({
  data: {
    helpDialogMessage: `
      Hubungi call center kantor pembiayaan anda.
      Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
      Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
    `,
    generalErrorMessage: `
      We can’t process your customer number right now. Give it a try later, perhaps? 
    `,
    cutOffTimeErrorMessage: `
      Your transaction cannot be processed right now. Please try again after 01.00 AM.
    `,
    denoms: [],
    customerNumberLoading: false,
    providers: [
      {
        section: 'A',
        name: 'Provider Name A'
      },
      {
        section: 'A',
        name: 'Provider Name'
      },
      {
        section: 'A',
        name: 'Provider Name'
      },
      {
        section: 'B',
        name: 'Provider Name'
      },
      {
        section: 'B',
        name: 'Provider Name'
      },
      {
        section: 'C',
        name: 'Provider Name C'
      },
      {
        section: 'C',
        name: 'Provider Name'
      },
      {
        section: 'C',
        name: 'Provider Name'
      },
      {
        section: 'D',
        name: 'Provider Name'
      }
    ],
    providersSearchResult: []
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

  saveHelpDialogRef(ref) {
    this.helpDialogRef = ref
  },
  openHelpDialog() {
    this.helpDialogRef.show()
  },
  closeHelpDialog() {
    this.helpDialogRef.hide()
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
      this.setData({ providersSearchResult: filtered })
    } else {
      this.setData({ providersSearchResult: this.data.providers })
    }
    // todo: refactor for search result UI (empty or not empty) on other jira story
  }
});