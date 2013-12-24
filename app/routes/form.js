import information from 'appkit/models/information';
/* global Cookies */

export default Ember.Route.extend({
  model: function() {
    return information;
  },
  actions: {
    close: function() {
      $('#modal-access').modal('hide');
    }
  },
  activate: function() {
    if (Cookies.get('isMedic') !== "true") {
      this.render("modal-access", {
          into: 'application',
          outlet: 'modal'
      });
      Ember.run.next(this, this.animateModalOpen);
    }
  },
  animateModalOpen: function() {
    $('#modal-access').modal({
        keyboard: false,
        show: true,
        backdrop: 'static'
      });
  }
});
  