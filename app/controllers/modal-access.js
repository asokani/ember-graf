/* global Cookies */

var ModalAccessController = Ember.Controller.extend({
    step1: true,
    buttonText: "Pokračovat",
    isButtonDisabled: true,
    isChecked: false,
    blah: Ember.observer('isChecked', function() {
      this.set("isButtonDisabled", !this.get("isChecked"));	
    }),
    actions: {
        continue: function() {
          if (this.get("step1") && this.get("isChecked")) {
            this.set("step1", false);	
            this.set("buttonText", "Vstoupit");
          } else if (!this.get("step1")) {
            Cookies.set('isMedic', 'true', { expires: 60*60*24*365 });
            this.send("close");
          }
        }
    }


});

export default ModalAccessController;