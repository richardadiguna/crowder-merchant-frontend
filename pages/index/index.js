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
    denoms: [
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
     ],
     providers: [
       'A Provider Name',
       'A1 Provider Name',
       'B Provider Name',
       'B1 Provider Name',
       'B2 Provider Name',
       'C Provider Name',
       'C1 Provider Name',
     ]
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
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
});