var FormController = Ember.Controller.extend({
    actions: {
        goToGraph: function () {
            this.transitionToRoute("graph");
        }
    }

});

export default FormController;