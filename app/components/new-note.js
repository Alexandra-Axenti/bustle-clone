import Ember from 'ember';

export default Ember.Component.extend({
  addNewNote: false,
 actions: {
   noteFormShow() {
     this.set('addNewNote', true);
   },

   saveNote() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('addNewNote', false);
      this.sendAction('saveNote', params);
    }
  }
});
