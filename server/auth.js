Accounts.onCreateUser(function(options, user) {
  console.log("user account created !", user); // you can log the user to see what else is available to save
  // user.profile = {
  //   email: user.services.persona.email
  // }
  user.username = user.services.persona.email
  user.profile = {picture: Gravatar.imageUrl(user.services.persona.email, 'https')}
  console.log("User gravatar picture :", user.profile.picture)
  user.emails = [{address: user.services.persona.email, verified: true}]
  user.createdAt = new Date()

  Roles.addUsersToRoles(user._id, ["admin"], Roles.GLOBAL_GROUP)
  user.roles = {}
  user.roles[Roles.GLOBAL_GROUP] = ["admin"]


  var notification = {author: user._id, owner: user._id, title:"Hello", content: "Welcome"}
  try {
    Schema.Notification.clean(notification)
  } catch(error) {
    Errors.throw(error.message);
  }

  Notifications.insert(notification)
  return user
})

Accounts.onLogin(function(info){

})
