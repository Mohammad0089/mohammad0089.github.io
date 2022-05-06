function bigger() {  
    document.getElementById("text").style.fontSize = "24pt";
    alert("Hello, world!");
  }
  
function fancy() {  
    let textField = document.getElementById("text");
    if(document.getElementById("fancy").checked) {
      
        textField.style.fontWeight = "bold";
        textField.style.color = "#0000ff";
        textField.style.textDecoration = "underline";
        textField.style.fontFamily = "Garamond";
        document.getElementById("boring").checked = false;
    }
  }
  
  
function boring() {  
    let textField = document.getElementById("text");
    if(document.getElementById("boring").checked) {
        textField.style.fontSize = "14pt";
        textField.style.fontWeight = "normal";
        textField.style.color = "#000000";
        textField.style.textDecoration = "none";
        textField.style.fontStyle = "Arial";
        document.getElementById("fancy").checked = false;
    }
}
  
function moo() {  
    let textField = document.getElementById("text");
    textField.style.textTransform = "uppercase";

    let parts = textField.value.split(".");
    textField.value = parts.join("-Moo.");
}
