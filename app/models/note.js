import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  headline: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  date:D S.attr()
});
