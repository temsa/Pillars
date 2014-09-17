Template.notifications.last = function last(){
  console.log("last :", this, arguments)

}

// Template.helpers.notLast = function last(parent){
//   console.log("notLast :", this, arguments)
//   return true//parent.indexOf(this) != parent.length-1
// }

UI.registerHelper('notLast', function() {
  console.log("notLast :", this, arguments)
  //console.log("inst :", Blaze.getCurrentView().parentView.dataVar.curValue())//)
  //console.log(Blaze._parentData(1))
  console.log(Blaze.getCurrentView().parentView.parentView.argVar.curValue.collection)
  console.log("..",Blaze._parentData())
  console.log(".",Blaze.getCurrentData())
  return true

});
