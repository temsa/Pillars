Schema = Schema || {}

StorySchema = Schema.Story = new SimpleSchema([ModelSchema, {
  title: {
    type: String,
    label: "Titre",
    max: 50,
    optional: true
  },
  content: {
    type: String,
    label: "Contenu",
    optional: true
  },
  status: {
    type: String,
    optional: true,
    label: "Niveau",
    allowedValues: ['Trace', 'Debug', 'Info', 'Warning', 'Error', 'Fatal']
  }
}]);

Stories = new Meteor.Collection("stories")

Stories.attachSchema(StorySchema)
