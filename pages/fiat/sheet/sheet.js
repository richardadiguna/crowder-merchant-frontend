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
    this.sheetRef.hide()
  },
  saveSheet2Ref(ref) {
    this.sheet2Ref = ref
  },
  openSheet2() {
    this.sheet2Ref.show()
  },
  closeSheet2() {
    this.sheet2Ref.hide()
  }
});
