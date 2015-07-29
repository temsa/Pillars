AdminConfig = {
  //name: 'My App'
  collections: {
    Notifications: {
      omitFields: ['createdAt', 'creator', 'updatedAt', 'updater'],
      auxCollections: ['Users'],
      tableColumns: [
        { label: 'Cible', name: 'owner', collection: 'Users', collection_property: '_id'},
        { label: 'Titre', name: 'title'},
        { label: 'Contenu', name: 'content'},
        { label: 'Auteur', name: 'author', collection: 'Users', collection_property: 'username'}
      ],
      icon: 'bullhorn'
    },
    Stories: {
      omitFields: ['createdAt', 'creator', 'updatedAt', 'updater'],
      icon: 'comment'
    }
  }
}

//Activates validation debug on client
SimpleSchema.debug = true;

if(Meteor.isServer)
  Meteor.AppCache.config({onlineOnly: ['/packages/oauth', '/packages/mdj_chai', '/packages/yogiben_admin', '/packages/seriousm_emoji-continued', '/packages/dirkstevens_meteor-sitemaps']});
