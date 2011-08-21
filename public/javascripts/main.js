/* DO NOT MODIFY. This file was compiled Sun, 21 Aug 2011 06:11:25 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/main.coffee
 */

(function() {
  var gc;
  gc = window.Gc || (window.Gc = {});
  gc.App || (gc.App = {});
  gc.App.Main = {
    views: [],
    controllers: [],
    init: function() {
      console.log('init Main');
      $.ajaxSetup({
        cache: false
      });
      this.controllers.push(new gc.Controllers.PagesController);
      return Backbone.history.start();
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
