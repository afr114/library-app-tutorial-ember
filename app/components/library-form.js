import Ember from 'ember';

export default Ember.Component.extend({
  isNew: true,

  actions: {
    saveLibrary() {
      this.get('model').save().then(this.sendAction());
    },

    editLibrary() {
      this.get('model').save().then(this.sendAction());
    }
  }
});
