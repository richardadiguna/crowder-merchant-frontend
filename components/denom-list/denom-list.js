Component({
  data: {
    denomRows: [],
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
  },
});
