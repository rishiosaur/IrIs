function IrIs(input, output, button) {
  'use strict'
  //Variables
  var parseJSON = [];
  outflow = document.getElementById(output);
  function crElemWithClass(val, str) {
    var elem = createElement("span");
    var att = document.createAttribute("class");
    att.value= val;
    elem.setAttributeNode(att);
    elem.innerHTML = str;
  }
  function convElem(content, speaker) {
    crElemWithClass("conversation-piece" + speaker, content);
  }
  while (button.onMouseDown) {
      switch (input.innerHTML) {
        case "hi":
          convElem("Greetings", "IrIs");
          parseJSON.push("Greeted":true);
        break;
        default:
          return "I couldn't understand.";
    }
    var JSONParsed = JSON.stringify(parseJSON);
    return JSONParsed;
  }

}
