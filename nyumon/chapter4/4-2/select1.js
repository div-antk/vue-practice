var app = new Vue({
  el: "#app",
  data: {
    age: ''
  },
    computed: {
      fare: function() {
        if (this.age == '3歳未満') {
          return 0;
        } else if (this.age == '13歳未満') {
          return 1000;
        } else if (this.age == '65歳未満') {
          return 2000;
        } else if (this.age == '65歳以上') {
          return 0;
        } else {
          return -1;
        }
      }
    }
});