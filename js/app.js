var obj = {
    values: [80, 2,18],
    colors: ['#fee34e', '#d17d40', '#f7b100'],
    animation: true, // Takes boolean value & default behavious is false
    animationSpeed: 50, // Time in miliisecond & default animation speed is 20ms
 // 'horizontal' or 'vertical' or 'inner' & default text position is 'horizontal' position i.e. outside the canvas
    doughnutHoleSize: 50, // Percentage of doughnut size within the canvas & default doughnut size is null
    doughnutHoleColor: '#fff', // For doughnut colour & default colour is #fff (White)
    offset: 1, // Offeset between two segments & default value is null
    pie: 'normal', // if the pie graph is single stroke then we will add the object key as "stroke" & default is normal as simple as pie graph
    isStrokePie: { 
        stroke: 20, // Define the stroke of pie graph. It takes number value & default value is 20
        overlayStroke: true, // Define the background stroke within pie graph. It takes boolean value & default value is false
        overlayStrokeColor: '#eee', // Define the background stroke colour within pie graph & default value is #eee (Grey)
        strokeStartEndPoints: 'Yes', // Define the start and end point of pie graph & default value is No
        strokeAnimation: true, // Used for animation. It takes boolean value & default value is true
        strokeAnimationSpeed: 40, // Used for animation speed in miliisecond. It takes number & default value is 20ms
        fontSize: '60px', // Used to define text font size & default value is 60px
        textAlignement: 'center', // Used for position of text within the pie graph & default value is 'center'
        fontFamily: 'Arial', // Define the text font family & the default value is 'Arial'
        fontWeight: 'bold' //  Define the font weight of the text & the default value is 'bold'
    }
  };    
//Generate myCanvas		
generatePieGraph('myCanvas', obj);

// Range Slider
let slider  = document.getElementById("slider");
let selector  = document.getElementById("selector");
let selectorValue  = document.getElementById("selectorValue");
let progressBar  = document.getElementById("progressBar");
selectorValue.innerHTML = slider.value;
slider.oninput = function(){
  selectorValue.innerHTML = this.value;
  selector.style.left = this.value + "%";
  progressBar.style.width = this.value + "%";
}
// Range Slider 2
let slider2  = document.getElementById("slider2");
let selector2  = document.getElementById("selector2");
let selectorValue2  = document.getElementById("selectorValue2");
let progressBar2  = document.getElementById("progressBar2");
selectorValue2.innerHTML = slider2.value;
slider2.oninput = function(){
  selectorValue2.innerHTML = this.value;
  selector2.style.left = this.value + "%";
  progressBar2.style.width = this.value + "%";
}

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
