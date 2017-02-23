function IrIs(input, output) {
  'use strict'
  //Variables
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
  switch (input.innerHTML) {
    case "hi":
      convElem("Greetings", "IrIs");
      break;
    default:
      return "I couldn't understand.";
  }
}
