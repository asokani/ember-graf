export default Ember.Component.extend({
  parsedValue: 0,
  didInsertElement: function() {
    var element;
    element = $("<div class='valid'></div>");
    this.$(".border").append(element);
    element.css("bottom", this.numberToPosition(this.rangefrom) - 4);
    element.css("height", this.numberToPosition(this.rangeto - this.rangefrom));
    var from = parseInt(this.from, 10);
    var to = parseInt(this.to, 10);
    var value;
    if (this.value === undefined || this.value === "") {
      value = 0;
    } else {
      value = parseFloat(this.value.replace(",", "."));
    }
    for (var a = from; a <= to; a += to/10) {
        element = $("<div class='line'></div>");
        this.$(".border").append(element);
        element.css("left", 15);
      element.css("width", 6);
      element.css("bottom", this.numberToPosition(a));
    }
    element = $("<div class='number'>" + from + "</div>");
    this.$(".border").append(element);

    element = $("<div class='number'>" + to + "</div>");
    this.$(".border").append(element);
    element.css("bottom", this.numberToPosition(to) - 10);

    element = $("<div class='bar'></div>");
    this.$(".border").append(element);
    var height = this.numberToPosition(value);
	if (height > this.$(".border").height()-2) {
      height = this.$(".border").height()-2;
	}
    element.css("height", height);

    if (value >= this.rangefrom && value <= this.rangeto) {
      element.addClass("ok");
    } else {
      element.addClass("bad");
    }
    this.set("parsedValue", value);
  },
  numberToPosition: function(number) {
    return number * (this.$(".border").height()-20)/this.to + 10;
  }

});
