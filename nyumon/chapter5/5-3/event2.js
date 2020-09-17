Vue.component('hello-button', {
  template: `<button @click="$emit('hello')">押せ</button>`
});

var app = new Vue({
  el: '#app',
  data: {
    msg: ''
  },
  components: {
    'grand-parent': {
      template: `<hello-button @hello="$emit('hello')">おせ</hello-button>`
    },
  }
});