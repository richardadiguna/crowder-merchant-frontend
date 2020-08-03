import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    visible: false,
    sheetClass: '',
  },
  props: {
    roundedTop: false,
  },
  didMount() {
    this.updateSheetClass()
  },
  deriveDataFromProps(nextProps) {
    this.updateSheetClass(nextProps)
  },
  methods: {
    updateSheetClass(props) {
      if (!props) props = this.props
      const { roundedTop } = props
      if (roundedTop) {
        this.setData({ sheetClass: 'f-sheet--rounded-top' })
      }
    },
    show () {
      this.setData({ visible: true })
    },
    dismiss () {
      this.setData({ visible: false })
    },
  },
}));