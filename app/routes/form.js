import information from 'appkit/models/information';
/* global Cookies */

export default Ember.Route.extend({
  model: function() {
    return information;
  }
});
  