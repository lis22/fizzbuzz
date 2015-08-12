
$(document).ready(function() {

  for (i=1; i<=100; i++)
  {
    //divisible by 3 and 5
    if((i%3==0) && (i%5==0))
      $("body").append("FizzBuzz <br />");

    //divisible by only 3
    else if(i%3==0)
      $("body").append("Fizz <br />");

    //divisible by only 5
    else if(i%5==0)
      $("body").append("Buzz <br /> ");

    //not divisible by 3 or 5
    else
      $("body").append(i + "<br />");
  }
});
