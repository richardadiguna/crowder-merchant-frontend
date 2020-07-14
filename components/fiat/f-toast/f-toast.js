import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  internalProps: {
    type: '',
    visible: false,
    message: '',
    onHide: null,
    onAction: null,
    duration: 2500,
  },
  mixins: [],
  data: {},
  didMount() {
    this.autoHide()
  },
  didUpdate() {
    this.autoHide()
  },
  didUnmount() {
    clearTimeout(this.autoHideTimer)
  },
  methods: {
    autoHide() {
      const { type, visible, duration, onHide } = this.data.internalProps
      if (type === 'spin') return
      if (visible) {
        this.autoHideTimer = setTimeout(() => {
          if (onHide) onHide()
        }, duration);
      } else {
        clearTimeout(this.autoHideTimer)
      }
    },
    onAction() {
      const { onAction } = this.props
      if (onAction) onAction()
    },
    show(options={}) {
      const { type } = options
      const internalProps = {...this.data.internalProps, type}
      internalProps.visible = true
      this.setData({ internalProps })
    },
    spin() {
      this.show({
        type: 'spin',
      })
    }
  },
}));
