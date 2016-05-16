import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  emailAddress: "",
  textMessage: "",
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  hasMessage: Ember.computed.bool('textMessage'),
  isDisabled: Ember.computed.not('isValid' && 'hasMessage'),

  actions: {
    sendMessage: function() {
      const contact = this.get('store').createRecord('contact');
      const email = this.get('emailAddress');
      const message = this.get('textMessage');
      contact.set('email', email);
      contact.set('message', message);
      contact.save();
      alert(`${this.get('emailAddress')} Message: ${this.get('textMessage')}`);
      this.set('responseMessage', `We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
