/* DO NOT MODIFY. This file was compiled Thu, 01 Sep 2011 11:01:54 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/page.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  App.Models.Page = (function() {
    __extends(Page, Backbone.Model);
    function Page() {
      Page.__super__.constructor.apply(this, arguments);
    }
    Page.prototype.url = "/pages";
    return Page;
  })();
  App.Collections.PagesCollection = (function() {
    __extends(PagesCollection, Backbone.Collection);
    function PagesCollection() {
      PagesCollection.__super__.constructor.apply(this, arguments);
    }
    PagesCollection.prototype.model = App.Models.Page;
    PagesCollection.prototype.url = '/pages';
    return PagesCollection;
  })();
}).call(this);
