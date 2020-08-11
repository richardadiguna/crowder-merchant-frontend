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
    denoms: [],
    customerNumberLoading: false,
  },
  onLoad() {},
  
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
