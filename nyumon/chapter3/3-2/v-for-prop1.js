var customers = [
  {id: 1, name: 'たぬき', age: 35, gender: '男', pref: '栃木'},
  {id: 2, name: 'コアラ', age: 25, gender: '男', pref: '茨城'},
  {id: 3, name: 'おおうし', age: 36, gender: '女', pref: '神奈川'},
  {id: 4, name: 'こいぬ', age: 33, gender: '男', pref: '岐阜県'}

];

var app = new Vue({
  el: "#app",
  data: {
    customers: customers
  },
  computed: {
    over30men: function() {
      return this.customers.filter(function(e) {
        return e.age >= 30 && e.gender == '男';
      });
    }
  }
});