Pillars
=======

Pillars of Creation - Meteor.JS boostraper

What is it about?
-----------------
Just some basic packages glued together to have Users, with Roles, Persona authentication, an Admin, Autoforms, Model Validation,
and some basic model for an app, Notifications for Users, and also Stories that can be attached to any Model in order to
trace Model important event  like "This user has done this action at this date"

Usage
-----
```
 $> git clone https://github.com/temsa/Pillars.git
 $> meteor
```

##Notes
In order for auth to work as intended, either use in your browser the URL displayed in console,  http://localhost:3000/ in local, or run meteor with the ROOT_URL environment variable so that, or run meteor with the ROOT_URL environment variable so that
[Meteor.absoluteUrl('')](http://docs.meteor.com/#/full/meteor_absoluteurl) returns the valid URL for you app.
