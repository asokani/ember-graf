var GraphController = Ember.Controller.extend({
    actions: {
        goToForm: function () {
            this.transitionToRoute("form");
        }
    }
});

export default GraphController;