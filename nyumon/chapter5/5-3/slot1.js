var app = new Vue({
  el: "#app",
  components: {
    'my-comp': {
      // slotの間の文字列は明示的なもので、別になくても構わない
      template: '<h1>僕の名前は<slot>名前</slot>です</h1>'
    }
  }
});