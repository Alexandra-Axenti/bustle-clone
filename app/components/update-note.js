import Ember from 'ember';

export default Ember.Component.extend({
  updateNoteForm: false,
  actions: {
    updateNoteForm() {
      this.set('updateNoteForm', true);
    },
    update(note) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateNoteForm', false);
      this.sendAction('update', note, params);
    }
  }
});
