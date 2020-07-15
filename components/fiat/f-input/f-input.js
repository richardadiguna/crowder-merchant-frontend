import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    inputValue: '',
    showClearIcon: false,
    cssClass: ''
  },
  props: {
    type: 'text', // text || number || digit
    maxlength: 140,
    placeholder: ''
  },
  didMount() {
    const currentCssClass = this.data.cssClass
    const iconInnerLeft = this.props.$slots.iconInnerLeft
    iconInnerLeft && iconInnerLeft.length > 0 && this.setData({
      cssClass: currentCssClass + ' has-icon-inner-left'
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onInputFocus () {
      const currentCssClass = this.data.cssClass
      this.setData({
        cssClass: currentCssClass + ' focus'
      });
    },
    onInputBlur () {
      const currentCssClass = this.data.cssClass
      this.setData({
        cssClass: currentCssClass.replace(' focus', '')
      });
    },
    onInput (e) {
      this.setData({
        inputValue: e.detail.value
      })
      if (e.detail.value) {
        this.setData({
          showClearIcon: true
        })
      } else {
        this.setData({
          showClearIcon: false
        })
      }
    },
    onClearIconTap (e) {
      this.setData({
        inputValue: '',
      })
    }
  },
}));
