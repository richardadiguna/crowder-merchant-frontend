Page({
  data: {
    providerName: '',
    helpDialogMessage: `
      Hubungi call center kantor pembiayaan anda.
      Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
      Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
    `,
  },
  onLoad(query) {
    this.setData({ providerName: query.providerName })
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
});
