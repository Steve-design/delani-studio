$(document).ready(function(){
    $('.items').click(function () {
        $(this).children('.hideMe').slideToggle(1200);
        $(this).children('.show').toggle(1200);
      });
      //$('.card').hover(function(event){
       // $(".card").hover(function () {
        //  $(this).children(".card-1").fadeToggle('fast', "linear");
        //});
        //event.preventDefault();
     // });
     $('form#sendForm').submit(function(){
      var name = $('#nameDetails').val();
      var pass = $('#email').val();
      var mess = $('#content').val();
      alert("Hello " +name+ " we have received your message and we are working on it. Thank you for reaching out to us.");
    });
    });