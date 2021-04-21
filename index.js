function shout(string) {
    return string.toUpperCase();
  } 
  function whisper(string) {
    return string.toLowerCase();
  } 
  function logShout(string) {
    string = string.toUpperCase();
      console.log(string);
  } 
  function logWhisper(string) {
      string = string.toLowerCase();
       console.log(string);
    }
  
  function sayHiToGrandma(string) {
      const input = string;
      if (input===string.toLowerCase()){
        return "I can\'t hear you!";
      }
    else if (input === string.toUpperCase()){
         return "YES INDEED!";
       } else if (input==="I love you, Grandma.")
        {return "I love you, too.";
}
  }