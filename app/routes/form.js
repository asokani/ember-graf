import information from 'appkit/models/information';

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
    this.render("modal-access", {
        into: 'application',
        outlet: 'modal'
    });
    Ember.run.next(this, this.animateModalOpen);
  },
  animateModalOpen: function() {
    $('#modal-access').modal({
        keyboard: false,
        show: true,
        backdrop: 'static'
      });
  }
});
  