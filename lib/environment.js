AdminConfig = {
  //name: 'My App'
  collections: {
    Notifications: {
      omitFields: ['createdAt','creator','updatedAt', 'updater'],
      auxCollections: ['Users'],
      tableColumns: [
        {label:'Cible', name:'owner',collection: 'Users', collection_property: '_id'},
        {label:'Titre', name:'title'},
        {label:'Contenu', name:'content'},
        //{label:'Auteur', name:'author',collection: 'Users', collection_property: 'username'}
      ],
      icon: 'bullhorn'
    },
    Stories: {
      omitFields: ['createdAt','creator','updatedAt', 'updater'],
      icon: 'comment'
    }
  }
}


//FIXME, does not work yet, see http://docs.meteor.com/#appcache for documentation
if(Meteor.isServer)
  Meteor.AppCache.config({onlineOnly: ['/packages/yogiben:admin.js', '/packages/mdj:chai.js', '/packages/seriousm:emoji-continued']});
