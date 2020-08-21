Component({
  mixins: [],
  data: {},
  props: {
    providers: [],
    onSelect: null,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onProviderCellTap (e, props) {
      // const { onSelect } = this.props
      const { provider } = props
      // if (onSelect) onSelect(provider)
      my.navigateTo({
        url: `/pages/provider-select/provider-select?providerName=${provider.name || ''}`
      })
    }
  },
});
