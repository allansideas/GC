/* DO NOT MODIFY. This file was compiled Mon, 29 Aug 2011 10:22:58 GMT from
 * /home/test/code/rails/_personal/gchamp/app/coffeescripts/models/user.coffee
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
  App.Models.User = (function() {
    __extends(User, Backbone.Model);
    function User() {
      User.__super__.constructor.apply(this, arguments);
    }
    User.prototype.name = "user";
    User.prototype.url = "/users";
    return User;
  })();
  App.Collections.UsersCollection = (function() {
    __extends(UsersCollection, Backbone.Collection);
    function UsersCollection() {
      UsersCollection.__super__.constructor.apply(this, arguments);
    }
    UsersCollection.prototype.model = App.Models.User;
    UsersCollection.prototype.url = '/users';
    return UsersCollection;
  })();
}).call(this);
