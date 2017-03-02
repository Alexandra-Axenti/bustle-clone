import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   delete(note) {
     if (confirm('Are you sure you want to delete this story?')) {
       this.sendAction('destroyNote', note);
     }
   },
   destroyComment(comment) {
     this.sendAction('destroyComment', comment);
   }
 }
});
