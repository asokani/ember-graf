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
    }.property('vaha', 'vyska')
});

var information = Information.create();

export default information;