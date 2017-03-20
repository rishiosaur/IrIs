function IrIs(input, output, button) {
  //Variables
  function start() {
        // Initializes the client with the API key and the Translate API.
        var translate = gapi.client.init({
          'apiKey': 'AIzaSyAK2OhTm5DmTNdZRoODYjRkF9EuN_WHpJg',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
        });
  var translateLangs = ["FILL IN LATER"];
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
          convElem(randString("Hello there.", "Greetings", "Hi!"), "IrIs");
          ifParseJSON("Greeted":true, parseJSON);
        break;
        case: "WHAT'S THE TIME?" || "GIVE ME THE TIME"

          break;
        case "TRANSLATE SOMETHING FOR ME" || "TRAN":
          convElem("Ok, what language?", "IrIs");
          if (input.val() === translateLangs) {
            var firstLang = input.val();
            convElem("Ok, what language would you like to translate it into?");
            if (input.val() === translateLangs) {
              var secondLang = input.val();
              convElem("Alright, what would you like to translate?")
              translate.then(function(){
                return gapi.client.translations.list({
                  q: input.val(),
                  source: firstLang,
                  target: secondLang
                });
              }).then(function(response){
                convElem(response.result.data.translations[0].translatedText, "IrIs");
              }, function(reason){
                convElem('Error: ' + reason.result.error.message, "IrIs");
              })
            }
          }
          else {
            convElem("I'm sorry, that language is not in my database.");
          }
          break;
        case "SEND AN EMAIL TO SOMEONE" || "SEND AN EMAIL" || "CAN YOU SEND AN EMAIL?":
          
          break;
        default:
          convElem("I couldn't understand", "IrIs");
    }
    var JSONParsed = JSON.stringify(parseJSON);
    return JSONParsed;
  }

}
