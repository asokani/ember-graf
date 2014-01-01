var GraphController = Ember.Controller.extend({
    actions: {
        goToForm: function () {
            this.transitionToRoute("form");
        },
        exportPDF: function() {
            $("#pdfexport").submit();
        }
    }
});

export default GraphController;