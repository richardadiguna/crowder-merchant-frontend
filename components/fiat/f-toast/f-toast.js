import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {},
  props: {
    type: '',
    visible: false,
    message: '',
    onHide: null,
    onAction: null,
    duration: 2500,
  },
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
      const { type, visible, duration, onHide } = this.props
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
    }
  },
}));
