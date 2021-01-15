    
$(document).ready(function(){
    
    // jquery starts
    $(document).ready(function(){
        $(window).resize(function () 
        {
            if ($(window).width() <= 790) 
          {
            window.location.reload();
          }
          if ($(window).width() <= 1300) 
          {
            window.location.reload();
          }    
        });
      
      //  Sidebar Code
      function subMenu1(){
        $(".plus1").click(function(){
          $(".submenu").show(500);
          $(this).hide();
          $(".minus1").show();
        });
        $(".minus1").click(function(){
          $(".submenu").hide(500);
          $(this).hide();
          $(".plus1").show();
        });
      
      }
       subMenu1();
      function subMenu2(){
        $(".plus2").click(function(){
          $(".submenu2").show(500);
          $(this).hide();
          $(".minus2").show();
        });
        $(".minus2").click(function(){
          $(".submenu2").hide(500);
          $(this).hide();
          $(".plus2").show();
        });
      
      }
       subMenu2();
      function subMenu3(){
        $(".plus3").click(function(){
          $(".submenu3").show(500);
          $(this).hide();
          $(".minus3").show();
        });
        $(".minus3").click(function(){
          $(".submenu3").hide(500);
          $(this).hide();
          $(".plus3").show();
        });
      
      }
       subMenu3();
      function subMenu4(){
        $(".plus4").click(function(){
          $(".submenu4").show(500);
          $(this).hide();
          $(".minus4").show();
        });
        $(".minus4").click(function(){
          $(".submenu4").hide(500);
          $(this).hide();
          $(".plus4").show();
        });
      
      }
       subMenu4();
      function subMenu5(){
        $(".plus5").click(function(){
          $(".submenu5").show(500);
          $(this).hide();
          $(".minus5").show();
        });
        $(".minus5").click(function(){
          $(".submenu5").hide(500);
          $(this).hide();
          $(".plus5").show();
        });
      
      }
       subMenu5();
      
      
      // Screen size Side_Navbar
      
          if ($(window).width() <= 790) 
        {
       $(".btn").click(function(){
         $(".side-bar").css("width", "200px");
         $(".disp").show();
         $(".special").css("color","#fff");
         $(this).hide();
         $(".btnShow").show();
         $(".plus1, .plus2, .plus3, .plus4, .plus5").show();
       });
       $(".btnShow").click(function(){
         $(".disp, .submenu, .submenu1, .submenu2, .submenu3, .submenu4, .submenu5").hide();
         $(".plus1, .plus2, .plus3, .plus4, .plus5").hide();
         $(".minus1, .minus2, .minus3, .minus4, .minus5").hide();
        $(".side-bar").css("width", "55px");
        $(".disp").hide();
       $(".special").css("color","#fff");
       $(this).hide();
       $(".btn").show();
      
       });
        }
        
      });
      
    });
