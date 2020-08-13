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
    onProviderCellTap () {
      my.navigateTo({
        url: `/pages/cust-number-input/cust-number-input`
      })
    }
  },
});
