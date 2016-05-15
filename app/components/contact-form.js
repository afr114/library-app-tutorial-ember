import Ember from 'ember';

export default Ember.Component.extend({
  emailAddress: "",
  textMessage: "",
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  hasMessage: Ember.computed.bool('textMessage'),
  isDisabled: Ember.computed.not('isValid' && 'hasMessage'),

  actions: {
    sendMessage: function() {
      alert(`${this.get('emailAddress')} Message: ${this.get('textMessage')}`);
      this.set('responseMessage', `We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
    }
  }
});
