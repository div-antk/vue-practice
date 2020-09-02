var app = new Vue({
  el: '#app',
  data: {
    color: 'blue',
    align: 'left',
    size: '3em'
  },
  methods: {
    setAlign: function(align) {
      this.align = align;
    },
    setColor: function(color) {
      this.color = color;
    }
  }
});