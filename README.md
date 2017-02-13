<h3> What is IrIs?
<p>IrIs is a virtual assistant based off of <a href="https://github.com/cherche/fuchsia/blob/master">Ryan Nguyen's Fuchsia</a>. It is Siri backwards.

<h3>Usage
<p>Disclaimer: IrIs is a work in progress. In fact, it may not work at all.

<code>
IrIs(input, output);

You must specify the target places for the input and output of IrIs. Example:
<code>
var input = document.getElementById("input");
var output = document.getElementById("output");
IrIs(input, output);

In this, you specify the targets and store them in a variable, then call the function. It is supposed to read the data written by the user in the input, then outputs in the specified output box.

Since this is a JavaScript API, you can style it to your specifications. In your <code>main.css<code> file, you have to make a class for <code>.conversation-pieceIrIs</code> and style that. You will also have to style the input <code>.conversation-piece</code>.
