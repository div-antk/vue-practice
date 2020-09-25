var vm = new Vue({
  el: '#app',
  data: {
    results: null,
    keyword: '',
    params: {
      q: '', // 検索文字列
      part: 'snippet',
      type: 'video',
      maxResult: '10', // 最大検索数
      key: 'AIzaSyAj3Cyp3d0s8pDhyo1d0Yi6W6fdg8z56yU'
    }
  },
  methods: {
    searchMovies: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {params: this.params})
        .then(function(res) {
          self.results = res.data.items;
        })
        .catch(function(err) {
          console.log(err);
        })
    }
  }
});