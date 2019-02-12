$( document ).ready(function() {

  var app = new Vue({
    el: "#app",
    data: {
      isVueWorking: true,
      loading: false,
      submitted: false,
      error: false,
      gifs: [],
      searchTerm: ''
    },
    methods: {
      doSomething: function(){
        var apikey="9lymU3JUHfaII8onVaXu5Yma9bebfwBt";
        const url = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" + app.searchTerm + "&limit=5";
        app.loading = true;
        axios.get(url)
          .then(function (res) {
            app.loading = false;
            app.submitted = true;
            console.log(res.data.data[0].url);
            for (i=0; i<5; i++){
              console.log(i);
              app.gifs[i] = { url: res.data.data[i].url, title: res.data.data[i].title, slug: res.data.data[i].slug, embed_url: res.data.data[i].embed_url  };
            }
        })
        .catch(function (error) {
          app.error = true;
          app.loading = false;
          console.log(error);
        })
      },
      errorFalse: function(){ // Turn Error Back to False
        app.error = false;
      }
    }
  });
});
