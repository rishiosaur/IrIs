function IrIs(input, output){
  var d = document, w = window, i = input;
  var Greetings = ["HELLO", "HI", "GREETINGS"];
  var elem = d.createElement("span");
  var makeElem = function(str) {
    span.innerHTML = str;
  }
  function makeAttribute(target, attribute) {
    target.addAttribute(attribute);
  }
  input.value.toUpperCase;
  String(i.value);
  function makeConvers(speaker, message, type) {
    return makeElem('<' + type + ' class="conversation-piece ' + speaker + '">' + message + '</' + type + '>')
  }
  switch (input.value) {
    case Greetings:
      makeConvers(IrIs, "Greetings", p);
      break;
    case ""
    default:
      makeConvers(IrIs, "I couldn't understand that", p);

  }
}
