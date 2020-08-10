import FiatComponent from '../core/fiat-component'
import addClass from '/utils/addClass'
import removeClass from '/utils/removeClass'

Component(FiatComponent({
  exportInputHandler: true,
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
    inputType: 'text-box' // 'text-box' || 'text-field' (not supported yet) || 'text-field-amount'
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
    onInputFocus (e) {
      const { inputTypeClass } = this.data
      const { onInputFocus } = this.props
      if (onInputFocus) onInputFocus(e)
      this.setData({
        inputTypeClass: addClass(inputTypeClass, 'f-input--focus')
      });
    },
    onInputBlur (e) {
      const { onInputBlur } = this.props
      const { inputTypeClass } = this.data
      if (onInputBlur) onInputBlur(e)
      this.setData({
        inputTypeClass: removeClass(inputTypeClass, 'f-input--focus')
      });
    },
    onInput (e) {
      const { onInput } = this.props
      const { value: inputValue } = e.detail

      this.setData({
        inputValue,
      })

      if (onInput) onInput(e)
      
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
    onClearIconTap (e) {
      const { onInput } = this.props
      this.setData({
        inputValue: '',
        showClearIcon: false,
      })
      if (onInput) {
        const detail = e.detail ? e.detail : {}
        detail.value = ''
        onInput({ ...e, detail })
      }
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
