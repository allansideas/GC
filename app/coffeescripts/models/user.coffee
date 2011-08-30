class App.Models.User extends Backbone.Model
  name: "user"
  url: "/users"

class App.Collections.UsersCollection extends Backbone.Collection
  model: App.Models.User
  url: '/users'
