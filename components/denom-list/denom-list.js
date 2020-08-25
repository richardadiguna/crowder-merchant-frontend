Component({
  data: {
    denomRows: [],
    cutOffTimeErrorMessage: `
      Your transaction cannot be processed right now. Please try again after 01.00 AM.
    `,
  },
  props: {
    denoms: [],
    short: true,
  },
  didMount() {
    this.updateDenomRows()
  },
  deriveDataFromProps(nextProps) {
    this.updateDenomRows(nextProps)
  },
  methods: {
    updateDenomRows(props) {
      if (!props) props = this.props
      const { denoms=[] } = props
      const denomRows = []
      let denomRow = []
      let i = 0
      while (i < denoms.length) {
        if (i % 2 == 0) {
          denomRow = [denoms[i]]
          if (i == denoms.length - 1) denomRows.push(denomRow)
        } else {
          denomRow.push(denoms[i])
          denomRows.push(denomRow)
          denomRow = []
        }
        i++
      }
      this.setData({ denomRows })
    },
    onDenomCardTap (e) {
      const { goods } = e.target.dataset
      const denomAmount = goods.denom.amount
      switch(denomAmount) {
        case '20.000':
          console.log('success') // todo dummy call tradepay
          break
        case '50.000':
          this.showCutOffTimeError()
          break
        case '100.000':
          console.log('fail 2')
          break
        case '200.000':
          console.log('fail 3')
          break
        case '500.000':
          console.log('fail 4')
          break
        default:
          console.log('success') // todo dummy call tradepay
      }
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
  },
});
