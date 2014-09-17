Meteor.methods({
  readAllUserNotifications: function () {
    Notifications.update({status:'Unread'}, {$set: {status: 'Read'}}, {multi: true, validate:false}, function(err){console.error(err)});
  }
});
