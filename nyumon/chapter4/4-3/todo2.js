var app = new Vue({
  el: '#app',
  data: {
    storageKey: 'todolist',
    newtodo: '',
    todolist: []
  },
  methods: {
    addtodo: function() {
      if (this.newtodo == '') return;
      this.todolist.push({ 
        text: this.newtodo,
        done: false,
        hover: false
      });
      this.newtodo = '';
    },
    remove: function(index) {
      if (this.todolist[index].done == true) {
        this.todolist.splice(index, 1);
      }
    }
  },
  created: function() {
    var dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todolist = JSON.parse(dataStr);
    }
  },
  watch: {
    todolist: function() {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(this.todolist)
      );
    }
  },
})