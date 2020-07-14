import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  internalProps: {
    type: '',
    visible: false,
    message: '',
    onHide: null,
    onAction: null,
    duration: 2500,
    actionText: '',
    icon: '',
    snackbar: false,
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
      const { type, visible, duration } = this.data.internalProps
      if (type === 'spin') return
      if (visible) {
        this.autoHideTimer = setTimeout(() => {
          this.hide()
        }, parseInt(duration))
      } else {
        clearTimeout(this.autoHideTimer)
      }
    },
    onAction() {
      const { onAction } = this.props
      if (onAction) onAction()
    },
    show(options={}) {
      const { type, message, duration, actionText, icon, snackbar } = options
      const internalProps = {
        ...this.data.internalProps,
        type,
        message,
        duration,
        actionText,
        icon,
        snackbar
      }
      internalProps.visible = true
      this.setData({ internalProps })
    },
    hide() {
      const { onHide } = this.data.internalProps
      if (onHide) onHide()
      const internalProps = {...this.data.internalProps, visible: false}
      this.setData({ internalProps })
    },
    spin() {
      this.show({
        type: 'spin',
      })
    },
    warning(message, options={}) {
      const target = { type: 'warning', icon: 'f-warning' }
      this.show({
        message,
        type: 'warning',
        ...options,
      })
    }
  },
}));
