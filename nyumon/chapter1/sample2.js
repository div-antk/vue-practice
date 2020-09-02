var app = new Vue({
  el: '#app',
  data: {
    msg1: 'はじめての！',
    msg2: 'vuevue'
  },
  methods: {
    changeMsg1: function(){
      this.msg1 = "（´ω｀）";
    }
  }
});