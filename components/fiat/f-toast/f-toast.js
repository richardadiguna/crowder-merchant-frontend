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
      const { onAction } = this.data.internalProps
      if (onAction) onAction()
    },
    show(options={}) {
      this.reset()
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
      this.reset()
    },
    reset() {
      clearTimeout(this.autoHideTimer)
      const internalProps = {...this.data.initialProps}
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
    },
    success(message, options={}) {
      this.show({
        message,
        type: 'success',
        ...options,
      })
    }
  },
}));
