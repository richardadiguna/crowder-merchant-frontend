Component({
  mixins: [],
  data: {
    slotVisible: false,
    transitionClass: '',
  },
  props: {
    name: '',
    visible: false,
    onLeave: null,
  },
  deriveDataFromProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this.updateTransition(['enter','enter-active'], () => {
        this.updateTransition(['enter-to','enter-active'], () => {
          this.setData({ slotVisible: true }, () => {
            this.timer = setTimeout(() => {
              this.clearTransition()
            }, 100)
          })
        })
      })
    } else if (this.props.visible && !nextProps.visible) {
      this.updateTransition(['leave','leave-active'], () => {
        this.updateTransition(['leave-to','leave-active'], () => {
          this.setData({ slotVisible: false }, () => {
            this.timer = setTimeout(() => {
              this.clearTransition()
            }, 100)
          })
        })
      })
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {
    clearTimeout(this.timer)
  },
  methods: {
    clearTransition(callback) {
      this.setData({ transitionClass: ''}, () => {
        if (callback) callback()
      })
    },
    updateTransition(types, callback) {
      const { name } = this.props
      const transitionClasses = []
      for (let i=0; i<types.length; i++) {
        transitionClasses.push(name + '-' + types[i])
      }
      const transitionClass = transitionClasses.join(' ')
      this.setData({ transitionClass }, () => {
        if (callback) callback()
      })
    },
  },
});
