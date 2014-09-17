Meteor.subscribe("userNotifications",{onError: function(error){
  Errors.throw(error.message);
}})

Template.notifications.userUnreadNotifications = function () {
  return Notifications.find({status:'Unread'}, {sort:{updatedAt:-1}}) // already filtered to only owner's one
};

Template.notifications.events({
  'click [data-read-all-notifications]': function () {
    Meteor.call('readAllUserNotifications')
  }
});
