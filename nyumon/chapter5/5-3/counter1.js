var counter = {
  // template: 
    // '<div><h1>カウンター</h1>' +
    // '<button @click="cdown">カウントダウン</button>' +
    // '<p>{{ count }}</p>' +
    // '</div>',
  
  // テンプレートリテラルでも書ける
  template: `
    <div><h1>カウンター</h1>
    <button @click="cdown">カウントダウン</button>
    <p>{{ count }}</p>
    </div>
    `,
  data: function() {
    return {
      count: 5
    };
  },
  methods: {
    cdown: function() {
      --this.count;
    }
  }
};

var app = new Vue({
  el: '#app',
  components: {
    counter: counter
  }
})