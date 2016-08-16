$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"];
    var result = [];
    var splitArray = $("#sentenceInput").val().toLowerCase().split("");
    for(var i = 0; i < splitArray.length; ++i) {
        if(vowels.includes(splitArray[i])){
          result.push("-");
        } else{ result.push(splitArray[i]);

          }
    }

    $("#showResult").text(result.join(""));



    console.log(result);




    // REgular expression cheat
    // userInput = userInput.replace( /[aeiou]/g, '-');
    // console.log(userInput);



  });
});
