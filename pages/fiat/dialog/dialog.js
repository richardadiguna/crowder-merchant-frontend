Page({
  data: {},
  onLoad() {},
  saveRefDialog2(ref) {
    this.dialog2Ref = ref
  },
  showDialog2 () {
    this.dialog2Ref.show()
  },
  closeDialog2 () {
    this.dialog2Ref.hide()
  },
});
