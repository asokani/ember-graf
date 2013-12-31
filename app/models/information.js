var Information = Ember.Object.extend({
    glykemieNalacno: "",
    glykemiePoJidle: "",
    hba1c: "",
    cholesterolCelkem: "",
    cholesterolHdl: "",
    cholesterolLdl: "",
    triacyglyceroly: "",
    pas: "",
    tlakDiastolicky: "",
    tlakSystolicky: "",
    vaha: "",
    vyska: "",
    checkedRadio: "man",
    bmi: function(key, value) {
      var vaha = this.get("vaha");
      var vyska = this.get("vyska");
      if (vaha === undefined || vaha === "" || vyska === undefined || vyska === "") {
        return String(0);
      }
      vaha = parseFloat(String(vaha).replace(",", "."));
      vyska = parseFloat(String(vyska).replace(",", "."))/100;
      var result = vaha/(vyska*vyska);
      result = Math.round(result*10)/10;
      return String(result);
    }.property('vaha', 'vyska'),
    bmiFrom: function(key, value) {
        var radio = this.get("checkedRadio");
        if (radio === "man") {
            return "21";
        } else {
            return "20";
        }
    }.property('checkedRadio'),
    bmiTo: function(key, value) {
        var radio = this.get("checkedRadio");
        if (radio === "man") {
            return "25"
        } else {
            return "24";
        }
    }.property('checkedRadio')

});

var information = Information.create();

export default information;