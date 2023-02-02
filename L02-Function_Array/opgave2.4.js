let text = "Hej med dig jeg hedder John, og jeg er 30. Hvad med dig hvad hedder du og hvor gammel er du?";
text = text.replace(/(\.|,|\?)/g, "")
text = text.split(" ");

let map = new Map;
for(let e of text){
    if(map.has(e)){
        let v = map.get(e) + 1;
        map.set(e,v);
    }else{
        map.set(e,1);
    }
}
console.log(map);
