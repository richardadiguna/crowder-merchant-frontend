import FiatComponent from '../core/fiat-component'
import addClass from '/utils/addClass'
import removeClass from '/utils/removeClass'

Component(FiatComponent({
  mixins: [],
  data: {
    inputValue: '',
    showClearIcon: false,
    inputCssClass: '',
    inputTypeClass: 'f-input__text-box'
  },
  props: {
    type: 'text', // text || number || digit
    maxlength: 140,
    placeholder: '',
    showLoader: false,
    helperMsg: '',
    errorMsg: '',
    inputType: 'text-box'
  },
  didMount() {
    this.setInputTypeClass()
    this.setIconInnerLeftStyle()
    this.setErrorStyle()
  },
  didUpdate() {
    this.setErrorStyle()
  },
  didUnmount() {},
  methods: {
    onInputFocus () {
      const { inputCssClass } = this.data
      this.setData({
        inputCssClass: addClass(inputCssClass, 'focus')
      });
    },
    onInputBlur () {
      const { inputCssClass } = this.data
      this.setData({
        inputCssClass: removeClass(inputCssClass, 'focus')
      });
    },
    onInput (e) {
      this.setData({
        inputValue: e.detail.value
      })
      if (e.detail.value && !this.props.showLoader) {
        this.setData({
          showClearIcon: true
        })
      } else {
        this.setData({
          showClearIcon: false
        })
      }
    },
    onClearIconTap () {
      this.setData({
        inputValue: '',
      })
    },
    setIconInnerLeftStyle () {
      const { inputCssClass } = this.data
      const iconInnerLeft = this.props.$slots.iconInnerLeft
      iconInnerLeft && iconInnerLeft.length > 0 && this.setData({
        inputCssClass: addClass(inputCssClass, 'has-icon-inner-left')
      })
    },
    setErrorStyle () {
      const { inputCssClass } = this.data
      if (this.props.errorMsg) {
        this.setData({
          inputCssClass: addClass(inputCssClass, 'error')
        })
      } else {
        this.setData({
          inputCssClass: removeClass(inputCssClass, 'error')
        })
      }
    },
    setInputTypeClass () {
      switch (this.props.inputType) {
        case 'text-field': 
          this.setData({
            inputTypeClass: 'f-input__text-field'
          })
          break
        case 'text-field-amount': 
          this.setData({
            inputTypeClass: 'f-input__text-field f-input__text-field--amount'
          })
          break
        default:
          this.setData({
            inputTypeClass: 'f-input__text-box'
          })
      }
    },
  },
}));
