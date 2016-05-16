import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  isEdit: false,
  newEmailAddress: "",

  actions: {
    deleteEmail(invitation) {
      this.get('store').findRecord('invitation', invitation.id).then( invitation => {
          invitation.destroyRecord();
      });
    },

    editEmail() {
      this.set('isEdit', true);
    },

    sendEditEmail(invitation) {
      const newEmailAddr = this.get('newEmailAddress');
      this.get('store').findRecord('invitation', invitation.id).then( invitation => {
        invitation.set('email', newEmailAddr);
        invitation.save().then(function(response) {
          console.log(response.id);
        });
      });
      this.set('isEdit', false);
    }
  }
});
