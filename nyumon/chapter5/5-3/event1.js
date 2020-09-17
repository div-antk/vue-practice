Vue.component('hello-button', {
  template: `<button @click="$emit('hello')">おして</button>`
});

var app = new Vue({
  el: '#app',
  data: {
    msg: ''
  }
});