var ModalAccessController = Ember.Controller.extend({
	step1: true,
	isChecked: false,
	buttonText: "Pokračovat",
    actions: {
        continue: function() {
          if (this.get("step1") && this.get("isChecked")) {
            this.set("step1", false);
            this.set("buttonText", "Vstoupit");
          } else if (!this.get("step1")) {
            this.send("close");
          }
        }
    }

});

export default ModalAccessController;