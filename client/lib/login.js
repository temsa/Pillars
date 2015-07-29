global = window;

Template.pleaseLogin.events = Template.login.events({
  'click [data-app-login]': function() {
    Meteor.loginWithPersona(console.log);
    // increment the counter when button is clicked
    //Session.set("counter", Session.get("counter") + 1);
  },
  'click [data-app-logout]': function() {
    //Session.
    Meteor.logout(console.warn);
  }
});
