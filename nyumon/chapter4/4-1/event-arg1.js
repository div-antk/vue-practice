var app = new Vue({
  el: "#app",
  data: {
    fare: null
  },
  methods: {
    showFare: function(age) {
      if (age > 10) {
        // 子供料金
        this.fare = 1000;
      } else {
        this.fare = 2000;
      }
    }
  }
});