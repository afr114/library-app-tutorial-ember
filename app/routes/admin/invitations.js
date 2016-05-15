import Ember from 'ember';

export default Ember.Route.extend({
  isEdit: null,
  emailAddress: "",

  model() {
    return this.store.findAll('invitation');
  },

  actions: {
    deleteEmail(invitation) {
      this.store.findRecord('invitation', invitation.id).then(function(invitation){
          invitation.destroyRecord()
      })
    },

    editEmail(invitation) {
      this.set('emailAddress', emailAddress)
      console.log(this.get('emailAddress'));
    }
  }
});
