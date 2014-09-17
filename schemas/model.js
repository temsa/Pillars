Schema = Schema || {}

SchemaUtils = {
  describeUser: function describeUser() {
    return Meteor.users.find().fetch().map(function(user) {
      return {
        label: user.username,
        value: user._id
      }
    })
  }
}

ModelSchema = Schema.Model = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional : true
  },
  createdAt: {
    type: Date,
    index: -1,
    denyUpdate: true,
    autoValue: function createCreatedAt() {
      if (this.isInsert)
        return new Date()
    },
    optional: true
  },
  creator: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
    autoValue: function createCreator() {
      // console.log("this",this)
      // console.log("this field id",this.field("_id"))
      // console.log("this siblingField id",this.siblingField("_id"))
      // console.log("this userId",this.userId)

      if (this.isInsert && this.userId)
        return Meteor.user()
    },
    autoform: {
      options: SchemaUtils.describeUser
    },
    optional: true
  },
  updatedAt: {
    type: Date,
    index: -1,
    autoValue: function createUpdateAt() {
      return new Date()
    },
    optional: true
  },
  updater: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function createUpdater() {
      if (this.isUpdate && this.userId)
        return Meteor.user()
    },
    autoform: {
      options: SchemaUtils.describeUser
    },
    optional: true
  }
})
