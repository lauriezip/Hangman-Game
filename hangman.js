
  var tries=0;
  var triesLeft=12;
    var wins=0;
    var losses=0;
    var lettersUsed=[];
  var letterNumber=0
  var status=0
  

      var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
      
      for (var i = 0; i < letters.length; i++) {
        
        var letterBtn = ("<button>");
        
        letterBtn.attr("data-letter", letters[i]);
        
        letterBtn.text(letters[i]);
        
        $("#buttons").append(letterBtn);
      }
      
      $(".letter-button").on("click", function() {
    

      });
      
      $("#clear").on("click", function(clear) {
        
        $("#display").empty();
      });

    
    
    var wordNumber = Math.floor((Math.random()*(words.length-1)));
    var word2=words[wordNumber];
    for (var x=0;x<word2.length;x++){
    filler.push("_");
    };

    
    
    var input=event.key.toUpperCase();
    lettersUsed.push(input);
    
    tries++;
    triesLeft--;
    
    
    
    var status=0
    
    
    
    if (triesLeft===0){
      wordNumber = Math.floor((Math.random()*(words.length-1)));
      triesLeft=12;
      tries=0;
      filler=[];
      losses++
      word2=words[wordNumber];
      for (var x=0;x<word2.length;x++){
        filler.push("_");
      }
    };
    letterBtn.addClass("letter-button letter letter-button-color");
    var word2=words[wordNumber];
    for (var x=0;x<word2.length;x++){
      if (word2[x]===input){
      filler[x]=word2[x];
      };
      if (filler[x]==="_"){
      status++
      };
    };
    
    if (status===0){
        wordNumber = Math.floor((Math.random()*(words.length-1)));
      triesLeft=12;
      tries=0;
      filler=[];
      lettersUsed=[];
      occupied=[];
      wins++
      word2=words[wordNumber];
      for (var x=0;x<word2.length;x++){
        filler.push("_");
      }
    };
    

    