let text = "Hej med dig jeg hedder John, og jeg er 30. Hvad med dig hvad hedder du og hvor gammel er du?";
text = text.replace(/[^a-zåøæ’\-]/, "")
text = text.split(" ");
console.log(text);