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
  internalProps: {
    visible: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    saveOverlayRef(ref) {
      this.overlayRef = ref
    },
    show() {
      const internalProps = {...this.data.internalProps, visible: true}
      this.setData({ internalProps })
    },
    hide() {
      const internalProps = {...this.data.internalProps, visible: false}
      this.setData({ internalProps })
    },
    dismiss() {
      this.props.dismissable && this.hide()
    },
  },
}));
