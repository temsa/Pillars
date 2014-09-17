Schema = Schema || {}

NotificationSchema = Schema.Notification = new SimpleSchema([ModelSchema, {
  title: {
    type: String,
    label: "Titre",
    max: 50,
    optional: true
  },
  author: {
    //   autoValue: function createCreator() {
    //     //if (this.isInsert)
    //       return Meteor.userId()
    //   },
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: "Auteur",
    autoform: {
      options: SchemaUtils.describeUser
    },
    optional: true
  },
  owner: {
    //   autoValue: function createCreator() {
    //     //if (this.isInsert)
    //       return Meteor.userId()
    //   },
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: "Cible",
    autoform: {
      options: SchemaUtils.describeUser
    },
    optional: true
  },
  content: {
    type: String,
    label: "Contenu",
    optional: true
  },
  icon: {
    type: String,
    label: "Icône",
    optional: true
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Unread', 'Read'],
    autoValue: function () {
      if (this.isInsert)
        return 'Unread'
    }
  }
}]);

Notifications = new Meteor.Collection("notifications")

Notifications.attachSchema(NotificationSchema)
