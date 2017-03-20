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
          function handleClientLoad() {
          // Loads the client library and the auth2 library together for efficiency.
          // Loading the auth2 library is optional here since `gapi.client.init` function will load
          // it if not already loaded. Loading it upfront can save one network request.
          gapi.load('client:auth2', initClient);
        }

        function initClient() {
          // Initialize the client with API key and People API, and initialize OAuth with an
          // OAuth 2.0 client ID and scopes (space delimited string) to request access.
          gapi.client.init({
              apiKey: 'AIzaSyAK2OhTm5DmTNdZRoODYjRkF9EuN_WHpJg',
              discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
              clientId: '875052483911-81e4d5dmhq24p5dqoq7u5upkkqfbutff.apps.googleusercontent.com',
              scope: 'profile'
          }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          });
        }

        function updateSigninStatus(isSignedIn) {
          // When signin status changes, this function is called.
          // If the signin status is changed to signedIn, we make an API call.
          if (isSignedIn) {
            makeApiCall();
          }
        }

        function handleSignInClick(event) {
          // Ideally the button should only show up after gapi.client.init finishes, so that this
          // handler won't be called before OAuth is initialized.
          gapi.auth2.getAuthInstance().signIn();
        }

        function handleSignOutClick(event) {
          gapi.auth2.getAuthInstance().signOut();
        }

        function makeApiCall() {
          // Make an API call to the People API, and print the user's given name.
          var meApi = gapi.client.people.people.get({
            resourceName: 'people/me'
          });
          meApi.then(function(response) {
            convElem('Hello, ' + response.result.names[0].givenName, "IrIs");
          }, function(reason) {
            convElem('Error: ' + reason.result.error.message, "IrIs");
          });
        }
        default:
          convElem("I couldn't understand", "IrIs");
    }
    var JSONParsed = JSON.stringify(parseJSON);
    return JSONParsed;
  }

}
