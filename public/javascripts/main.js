(function() {
  var gc;
  gc = window.Gc || (window.Gc = {});
  gc.App || (gc.App = {});
  gc.App.Main = {
    views: [],
    controllers: [],
    collections: [],
    models: [],
    init: function() {
      console.log('init Main');
      $.ajaxSetup({
        cache: false
      });
      this.appModel = new Backbone.Model();
      this.markTime = new gc.Models.MarkTime();
      return this.markTimes = new gc.Collections.MarkTimesCollection();
    }
  };
  $(document).ready(function() {
    return $(window).bind("scroll", function() {
      var bg, pos;
      pos = $(window).scrollTop();
      console.log(pos);
      bg = pos * 1.6;
      return $('body').css("backgroundPosition", "0 -" + bg + "px");
    });
  });
}).call(this);
