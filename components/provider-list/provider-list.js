Component({
  mixins: [],
  data: {},
  props: {
    providers: [],
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onProviderCellTap (props) {
      const { provider } = props
      my.navigateTo({
        url: `/pages/provider-select/provider-select?providerName=${provider.name || ''}`
      })
    }
  },
});
