function IrIs(input, output, button) {
  'use strict'
  //Variables

  /*The JSON array that is returned */var parseJSON = ["init":true,];
  var outflow = document.getElementById(output);
  function crElemWithClass(val, str) {
    var elem = createElement("span");
    var att = document.createAttribute("class");
    att.value= val;
    elem.setAttributeNode(att);
    elem.innerHTML = str;
  }
  //Converting the Element
  function convElem(content, speaker) {
    var madeElem = crElemWithClass("conversation-piece" + speaker, content);
    output.innerHTML += madeElem;
  }
  //Adds something to the JSON array, which is stringified at the end.
  function ifParseJSON(toBeAdded, arrayCheck) {
    if (arrayCheck.every() != toBeAdded) {
      arrayCheck.push(toBeAdded)
    }
  }
  //The while loop keeps on running the switch block when the button is running
  while (button.onMouseDown()) {
      convElem(input.val, "self");
      //The switch block that evaluates the possibilities
      switch (input.val()) {
        case "hi":
          convElem("Greetings", "IrIs");
          ifParseJSON("Greeted":true, parseJSON);
        break;
        default:
          convElem("I couldn't understand", "IrIs");
    }
    var JSONParsed = JSON.stringify(parseJSON);
    return JSONParsed;
  }

}
