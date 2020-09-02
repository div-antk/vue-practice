// コンストラクタの名前はオブジェクト名と同じ
var app = new Vue({
  el: '#app',
  data: {
    msg1: 'ちわ',
    msg2: ''
  }
});

// あとから代入
app.msg2 = 'さよなら'