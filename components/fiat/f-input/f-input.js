import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
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
    }
  },
}));
