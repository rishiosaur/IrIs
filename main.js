function IrIs(input, output, button) {
  'use strict'
  //Variables
  var parseJSON = ["init":true,];
  var outflow = document.getElementById(output);
  function crElemWithClass(val, str) {
    var elem = createElement("span");
    var att = document.createAttribute("class");
    att.value= val;
    elem.setAttributeNode(att);
    elem.innerHTML = str;
  }
  function convElem(content, speaker) {
    var madeElem = crElemWithClass("conversation-piece" + speaker, content);
    output.innerHTML += madeElem;
  }
  while (button.onMouseDown()) {
      convElem(input.val, "self";)
      switch (input.val()) {
        case "hi":
          convElem("Greetings", "IrIs");
          parseJSON.push("Greeted":true);
        break;
        default:
          convElem("I couldn't understand", "IrIs");
    }
    var JSONParsed = JSON.stringify(parseJSON);
    return JSONParsed;
  }

}
