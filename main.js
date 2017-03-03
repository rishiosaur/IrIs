function IrIs(input, output, button) {
  'use strict'
  //Variables

  var parseJSON = ["init":true];
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
      arrayCheck.push(toBeAdded);
    }
  }
  //The random function
  function randString(case1, case2, case3) {
    var rand = Math.floor((Math.random() * 3) + 1);
    switch (rand) {
      case 3:
        return case3;
      break;
      case 2:
        return case2;
      break;
      default:
        return case1;
      break;

    }
  }
  //The while loop keeps on running the switch block when the button is running
  while (button.onMouseDown()) {
      convElem(input.val, "self");
      var inputUpper = input.val;
      inputUpper.toUpperCase();
      //The switch block that evaluates the possibilities
      switch (input.val()) {
        case "HI" || "HELLO" || "GREETINGS":
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
