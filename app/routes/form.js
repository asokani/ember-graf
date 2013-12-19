import information from 'appkit/models/information';

export default Ember.Route.extend({
  model: function() {
    return information;
  }
});
