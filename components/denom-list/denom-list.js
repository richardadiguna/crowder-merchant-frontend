import chunk from 'lodash/chunk'

Component({
  data: {
    denomRows: [],
  },
  props: {
    denoms: [],
  },
  didMount() {
    this.updateDenomRows()
  },
  derivedDataFromProps(nextProps) {
    this.updateDenomRows(nextProps)
  },
  methods: {
    updateDenomRows(props) {
      if (this.props) props = this.props
      const { denoms=[] } = props
      const denomRows = chunk(denoms, 2)
      this.setData({ denomRows })
    },
  },
});
