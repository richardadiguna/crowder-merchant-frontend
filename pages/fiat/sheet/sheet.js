Page({
  data: {},
  onLoad() {},
  saveSheetRef(ref) {
    this.sheetRef = ref
  },
  openSheet() {
    this.sheetRef.show()
  },
  closeSheet() {
    this.sheetRef.dismiss()
  }
});
