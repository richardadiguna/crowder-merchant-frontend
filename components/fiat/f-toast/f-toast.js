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
      const internalProps = {...this.data.internalProps}
      const keys = Object.keys(options)
      for (let i=0; i<keys.length; i++) {
        const key = keys[i]
        if (options[key] === null) continue
        internalProps[key] = options[key]
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
      this.show({
        message,
        type: 'warning',
        ...options,
      })
    },
    error(message, options={}) {
      this.show({
        message,
        type: 'error',
        ...options,
      })
    }
  },
}));
