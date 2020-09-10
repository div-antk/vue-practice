var app = new Vue({
  el: "#app",
  data: {
    imgWidth: 200,
    imgheight: 230,
    myStyle: {
      position: 'absolute',
      left: '50px',
      top: '100px',
      transition: 'aii 1s'
    }
  },
  methods: {
    move: function(e) {
      this.myStyle.left = e.clientX - this.imgWidth / 2 + 'px';
      this.myStyle.top = e.clientY - this.imgheight / 2 + 'px';
    }
  }
});