
// コンストラクタの名前はオブジェクト名と同じ
var app = new Vue({
  el: '#app',
  data: {
    inStr: ''
  },
  methods: {
    kaibun: function() {
      // 文字列を分解し、文字を要素とする配列にする
      // 配列の要素を接続して文字列にする
      if (this.inStr.length == 0) return;
      var rStr = this.inStr.split('').reverse().join('');

      if (this.inStr == rStr) {
        return '回分です';
      } else {
        return '回分ではない';
      }
    }
  }
});