import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    visible: false,
  },
  props: {
    dismissable: true,
    type: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    saveOverlayRef(ref) {
      this.overlayRef = ref
    },
    show() {
      this.setData({ visible: true })
    },
    hide() {
      this.setData({ visible: false })
    },
    dismiss() {
      this.props.dismissable && this.hide()
    },
  },
}));
