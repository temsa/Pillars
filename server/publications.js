Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

Meteor.publish("userNotifications", function () {
  return Notifications.find({owner: this.userId});
});
