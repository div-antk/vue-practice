var customers = [
  {id: 1, name: 'たぬき', age: 35, gender: '男', pref: '栃木'},
  {id: 2, name: 'コアラ', age: 25, gender: '男', pref: '茨城'},
  {id: 3, name: 'おおうし', age: 36, gender: '女', pref: '神奈川'},
  {id: 4, name: 'こいぬ', age: 33, gender: '男', pref: '岐阜県'}
];

// filterメソッドと異なり、配列の中身もsortされるので注意
var app = new Vue({
  el: "#app",
  data: {
    customers: customers
  },
  computed: {
    sortByAgeCuntomers: function() {
      return this.customers.sort(function(a, b) {
        return a.age - b.age;
      });
    }
  }
});