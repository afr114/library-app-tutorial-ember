import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  emailAddress: "",

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      console.log(this.get('store'));
      const newInvitation = this.get('store').createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    }
  }



});
