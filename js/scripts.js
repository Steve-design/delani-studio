$(document).ready(function(){
    $('.items').click(function () {
        $(this).children('.hideMe').slideToggle(1500);
        $(this).children('.show').toggle(1200);
      });
    
      

     $('form#sendForm').submit(function(){
      var name = $('#nameDetails').val();
      var pass = $('#email').val();
      var mess = $('#content').val();
      alert("Hello " +name+ " we have received your message and we are working on it. Thank you for reaching out to us.");
     });
    });
    $(document).ready(function(){
      $(".img4").mouseenter(function(){
      $("#set4").show();
      }).mouseleave(function(){
      $("#set4").hide();
      });
       
      $(".img3").mouseenter(function(){
      $("#set3").show();
      }).mouseleave(function(){
      $("#set3").hide();
      });
       
      $(".img2").mouseenter(function(){
      $("#set2").show();
      }).mouseleave(function(){
      $("#set2").hide();
      });
       
      $(".img1").mouseenter(function(){
      $("#set1").show();
      }).mouseleave(function(){
      $("#set1").hide();
      });
      });
      
    $(document).ready(function(){
      $(".img5").mouseenter(function(){
      $("#set5").show();
      }).mouseleave(function(){
      $("#set5").hide();
      });
       
      $(".img6").mouseenter(function(){
      $("#set6").show();
      }).mouseleave(function(){
      $("#set6").hide();
      });
       
      $(".img7").mouseenter(function(){
      $("#set7").show();
      }).mouseleave(function(){
      $("#set7").hide();
      });
       
      $(".img8").mouseenter(function(){
      $("#set8").show();
      }).mouseleave(function(){
      $("#set8").hide();
      });
      });
    