$(document).ready(function(){
    $('.items').click(function () {
        $(this).children('.hideMe').slideToggle(1200);
        $(this).children('.show').toggle(1200);
      });
      $(".row4").hover(function(){
        $(".img4").css({"opacity":"0.2","transition":"3s"});
        $("#item4").show();
    },
    function(){
        $(".img4").css("opacity","1");
        $("#item4").hide();
    });
    $(".row3").hover(function(){
        $(".img3").css({"opacity":"0.2","transition":"3s"});
        $("#item3").show();
    },
    function(){
        $(".img3").css("opacity","1")
        $("#item3").hide();
    });
    $(".row2").hover(function(){
        $(".img2").css({"opacity":"0.2","transition":"3s"});
        $("#item2").show();
    },
    function(){
        $(".img2").css("opacity","1")
        $("#item2").hide();
    });
    $(".row1").hover(function(){
        $(".img1").css({"opacity":"0.2","transition":"3s"});
        $("#item1").show();
    },
    function(){
        $(".img1").css("opacity","1")
        $("#item1").hide();
    });
    $(".row5").hover(function(){
        $(".img5").css({"opacity":"0.2","transition":"3s"});
        $("#item5").show();
    },
    function(){
        $(".img5").css("opacity","1")
        $("#item5").hide();
    });
    $(".row6").hover(function(){
        $(".img6").css({"opacity":"0.2","transition":"3s"});
        $("#item6").show();
    },
    function(){
        $(".img6").css("opacity","1")
        $("#item6").hide();
    });
    $(".row7").hover(function(){
        $(".img7").css({"opacity":"0.2","transition":"3s"});
        $("#item7").show();
    },
    function(){
        $(".img7").css("opacity","1")
        $("#item7").hide();
    });
    $(".row8").hover(function(){
        $(".img8").css({"opacity":"0.2","transition":"3s"});
        $("#item8").show();
    },
    function(){
        $(".img8").css("opacity","1")
        $("#item8").hide();
    });

     $('form#sendForm').submit(function(){
      var name = $('#nameDetails').val();
      var pass = $('#email').val();
      var mess = $('#content').val();
      alert("Hello " +name+ " we have received your message and we are working on it. Thank you for reaching out to us.");
    });
  });