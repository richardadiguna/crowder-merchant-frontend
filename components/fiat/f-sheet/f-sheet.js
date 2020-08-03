import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    visible: false,
    sheetClass: '',
    sheetAnimation: null,
  },
  props: {
    roundedTop: false,
  },
  onInit() {
    this.animation = my.createAnimation({
      timeFunction: 'ease',
      duration: 300,
    })
  },
  didMount() {
    this.updateSheetClass()
  },
  didUnmount() {
    clearTimeout(this.hideTimer)
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
      this.animation.translateY('0%').step()
      this.setData({ visible: true, sheetAnimation: this.animation.export() })
    },
    dismiss () {
      this.animation.translateY('80%').step()
      this.setData({ sheetAnimation: this.animation.export() })
      clearTimeout(this.hideTimer)
      this.hideTimer = setTimeout(() => {
        this.setData({ visible: false })
      }, 300)
    },
  },
}));