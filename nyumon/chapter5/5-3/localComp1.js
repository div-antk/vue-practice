var hello = {
  template: '<h1>ちわ</h1>'
}

var app = new Vue({
  el: '#app',
  components: {
    'my-comp': hello
  }
})