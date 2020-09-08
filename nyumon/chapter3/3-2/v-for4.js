var customers = [
  {id: 1, name: 'たぬき', age: 35, gender: '男', pref: '栃木'},
  {id: 2, name: 'コアラ', age: 25, gender: '男', pref: '茨城'},
  {id: 3, name: 'おおうし', age: 36, gender: '女', pref: '神奈川'}
];

var app = new Vue({
  el: '#app',
  data: {
    customers : customers
  }
})