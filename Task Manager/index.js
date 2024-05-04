function copyText(){
  // select textarea by id
  var Text = document.getElementById("textbox");
  /* select the text inside text area */
  Text.select();
  /* Copy selected text into clipboard */
  navigator.clipboard.writeText(Text.value);
  /* Set the copied text as text for div with id clipboard */
  document.querySelector("#clipboard").innerHTML=Text.value;
}
