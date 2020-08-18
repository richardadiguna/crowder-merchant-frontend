Component({
  mixins: [],
  data: {},
  props: {
    title: "PROVIDER NAME",
    provider: {
      name: "Provider Name",
    },
    onReset: null,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onReset() {
      const { onReset } = this.props
      if (onReset) onReset()
    },
  },
});
