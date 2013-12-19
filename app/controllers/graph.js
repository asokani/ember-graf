var GraphController = Ember.Controller.extend({
    actions: {

    },
    parseNumValue: function(data) {
        if (data === undefined || data === "") data = "0";
        return parseFloat(data.replace(",", "."), 10);
    },
    getInputValue: function(name) {
        return this.parseNumValue(this.get("model." + name));
    },
    glykemieNalacnoStyle: function() {
        var data = this.getInputValue("glykemieNalacno");
        var bg = "red";
        if (data >= 4 && data <= 6) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.glykemieNalacno"),
    glykemieNalacnoValue: function() {
        return this.getInputValue("glykemieNalacno");
    }.property("model.glykemieNalacno"),

    glykemiePoJidleStyle: function() {
        return "background:red;";
    }.property("model.glykemiePoJidle"),
    glykemiePoJidleValue: function() {
        return this.getInputValue("glykemiePoJidle");
    }.property("model.glykemiePoJidle"),

    hba1cStyle: function() {
        var data = this.getInputValue("hba1c");
        var bg = "red";
        if (data < 4.5) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.hba1c"),
    hba1cValue: function() {
        return this.getInputValue("hba1c");
    }.property("model.hba1c"),

    cholesterolCelkemStyle: function() {
        var data = this.getInputValue("cholesterolCelkem");
        var bg = "red";
        if (data < 4.5) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.cholesterolCelkem"),
    cholesterolCelkemValue: function() {
        return this.getInputValue("cholesterolCelkem");
    }.property("model.cholesterolCelkem"),

    cholesterolHdlStyle: function() {
        var data = this.getInputValue("cholesterolHdl");
        var bg = "red";
        if (data > 1.1) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.cholesterolHdl"),
    cholesterolHdlValue: function() {
        return this.getInputValue("cholesterolHdl");
    }.property("model.cholesterolHdl"),

    cholesterolLdlStyle: function() {
        var data = this.getInputValue("cholesterolLdl");
        var bg = "red";
        if (data < 2.5) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.cholesterolLdl"),
    cholesterolLdlValue: function() {
        return this.getInputValue("cholesterolLdl");
    }.property("model.cholesterolLdl"),

    triacyglycerolyStyle: function() {
        var data = this.getInputValue("triacyglyceroly");
        var bg = "red";
        if (data < 1.6) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.triacyglyceroly"),
    triacyglycerolyValue: function() {
        return this.getInputValue("triacyglyceroly");
    }.property("model.triacyglyceroly"),

    bmiStyle: function() {
        var data = this.getInputValue("bmi");
        var bg = "red";
        if (data < 4.5) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.bmi"),
    bmiValue: function() {
        return this.getInputValue("bmi");
    }.property("model.bmi"),

    tlakDiastolickyStyle: function() {
        var data = this.getInputValue("tlakDiastolicky");
        var bg = "red";
        if (data < 130) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.tlakDiastolicky"),
    tlakDiastolickyValue: function() {
        return this.getInputValue("tlakDiastolicky");
    }.property("model.tlakDiastolicky"),

    tlakSystolickyStyle: function() {
        var data = this.getInputValue("tlakSystolicky");
        var bg = "red";
        if (data < 80) {
            bg = "green";
        }
        return "background:"+bg+";";
    }.property("model.tlakSystolicky"),
    tlakSystolickyValue: function() {
        return this.getInputValue("tlakSystolicky");
    }.property("model.tlakSystolicky"),


});

export default GraphController;