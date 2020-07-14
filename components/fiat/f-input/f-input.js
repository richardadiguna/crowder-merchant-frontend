import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    inputValue: '',
    showClearIcon: false,
    focusClass: ''
  },
  props: {
    type: 'text', // text || number || digit
    maxlength: 140,
    placeholder: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onInputFocus () {
      this.setData({
        focusClass: 'focus'
      });
    },
    onInputBlur () {
      this.setData({
        focusClass: ''
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
