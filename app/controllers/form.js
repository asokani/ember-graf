var FormController = Ember.Controller.extend({
    actions: {
        goToGraph: function () {
            this.transitionToRoute("graph");
        }
    },
    init: function() {
    }

});

export default FormController;