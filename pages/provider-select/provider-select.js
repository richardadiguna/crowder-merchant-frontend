Page({
  data: {
    providerName: ''
  },
  onLoad(query) {
    this.setData({ providerName: query.providerName })
  },
});
