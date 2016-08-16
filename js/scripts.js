$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var finalNumber = parseInt($("input#numberFinal").val());
    console.log(finalNumber);
    var multiplier = parseInt($("input#numberMultiplier").val());
    console.log(multiplier);

    for (var results = 0; results <= finalNumber; results += multiplier) {
      alert(results);
    }

    if (isNaN(finalNumber) || isNaN(multiplier) || finalNumber <= 0 || multiplier <= 0 || finalNumber > multiplier) {
       $(".error").show();
       $("#formResults").hide();
    } else {
      $("#formResults").show();
      $(".error").hide();
    }

  });

});
