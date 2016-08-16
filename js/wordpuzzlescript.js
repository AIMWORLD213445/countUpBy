$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


    var userInput = $("#sentenceInput").val();
    console.log(userInput);
    // var inputArray = []
    // inputArray.push(userInput);
    // console.log(inputArray);

    var splitArray = userInput.split("");
    console.log(splitArray);


  });
});
