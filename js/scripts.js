$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var finalNumber = parseInt($("input#numberFinal").val());
    console.log(finalNumber);
    var multiplier = parseInt($("input#numberMultiplier").val());
    console.log(multiplier);

    var finalResults = []
       for (var results = multiplier; results <= finalNumber; results += multiplier){
         finalResults.push(results);
       }

    finalResults.forEach(function(finalResult){
      $('ul').append('<li>' + finalResult + '</li>');
    });

    if (isNaN(finalNumber) || isNaN(multiplier) || finalNumber <= 0 || multiplier <= 0 || finalNumber < multiplier) {
       $(".error").show();
       $("#formResults").hide();
    } else {
      $("#formResults").show();
      $(".error").hide();
    };


    });

    });
