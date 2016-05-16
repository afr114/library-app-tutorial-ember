import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editLibrary() {
      this.transitionTo('libraries');
    }
  }
});
