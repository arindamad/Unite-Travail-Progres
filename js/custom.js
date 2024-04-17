//=========== navigation ===========
$('.humburger').on('click', function(){
    $('.navigation').toggleClass('slidein');
    ;
});
$('.cls-btn').on('click', function(){
    $('.navigation').removeClass('slidein');
})
  
  $('.nav_sec ul > li > ul').parent().prepend('<i class="arw-nav"></i>');
  function subMenu(){
      $(this).parent('li').find('> ul').stop(true, true).slideToggle();
      $(this).parents('li').siblings().find('ul').stop(true, true).slideUp();
      $(this).toggleClass('actv');
      $(this).parent().siblings().find('.arw-nav').removeClass('actv');
  }
  $('.nav_sec ul > li > .arw-nav').on('click',subMenu);
      // Show the first tab and hide the rest
      $('.custom_tab-top ul li:first-child').addClass('active');
      $('.tab-content').hide();
      $('.tab-content:first').show();
  
      // Click function
      $('.custom_tab-top ul li').click(function () {
         $('.custom_tab-top ul li').removeClass('active');
         $(this).addClass('active');
         $('.tab-content').hide();
  
         var activeTab = $(this).find('a').attr('href');
         $(activeTab).fadeIn();
         return false;
      });


//=========== custom select ===========

  $(".wrapper-dropdown.btn").on("click", function(){
    $(".dropdown").not($(this).find(".dropdown")).slideUp()
    $(this).find(".dropdown").slideToggle();
  })
  $(".dropdown li").on("click", function(){
    let text = $(this).text();
    $(this).closest(".wrapper-dropdown.btn").find("span").text(text);
  });

// ===========  Scroll top & down ===========

let totalHeight = $(document).height();
let wh = window.innerHeight;
let lastScrollTop = 0;
$(window).on("scroll", function(){
    let top = $(this).scrollTop();
    console.log(top, wh, totalHeight);
    var st = $(this).scrollTop();
    if (top > lastScrollTop){
        // downscroll code
        console.log("down");
        
        if((totalHeight-wh-30)<top){
            // console.log("Window touched bottom")
            $(".down").hide();
            $(".up").show();
        }

    } else {
        // upscroll code
         if(50>top ){
            $(".up").hide();
            $(".down").show();
        }
    }
    lastScrollTop = st;
})
    $(document).ready(function() {
        $(".down").click(function() {
            $('html, body').animate({
                scrollTop: $(".down").offset().top
            }, 1000);
        });
        $(".up").click(function() {
            let currentTop= $(window).scrollTop();
            let temp = currentTop-700;
            $('html, body').animate({
                scrollTop: temp
            }, 1000);
        });
    }); 

// =========== search bar ===========
       const searchBtn = document.getElementById("search-btn");
       const searchInput = document.querySelector(".search-input");
       const closeInput = document.querySelector(".close_btn")

       searchBtn.addEventListener("click", function () {
         searchBtn.classList.toggle("active");
         searchInput.classList.toggle("active-search");
         closeInput.classList.toggle("active");
         
         console.log(searchInput);
       });
    closeInput.addEventListener("click", function() {
         searchInput.classList.remove("active-search");
         closeInput.classList.remove("active");
         searchBtn.classList.remove("active");
       });
       console.log(searchBtn, searchInput);

// =========== sticky header ===========
let posTop = $("#custom_banner_1").offset().top;

function headerfixed() {
  var getscrltop = $(this).scrollTop();
  var halfSection = $('.half-section');
  let height=  $("#custom_header").outerHeight();
//   console.log(height)
  if (getscrltop > 0) {
      $('.header').addClass('sticky');
      (posTop-height<getscrltop) ?$('.header').addClass('hide'):$('.header').removeClass('hide') ;
  }else {
      $('.header').removeClass('sticky');
  }
}
$(window).scroll('scroll resize', headerfixed); 

    

