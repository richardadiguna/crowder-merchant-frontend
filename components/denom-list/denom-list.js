import chunk from 'lodash/chunk'

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
      const denomRows = chunk(denoms, 2)
      this.setData({ denomRows })
    },
  },
});
