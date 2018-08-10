$(document).ready(function(){

  document.getElementById('view_button').addEventListener('click', function(){
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('cartoon_computer').style.margin = "0 auto";
    document.getElementById('cartoon_computer').style.width = "40%";
    document.getElementById('right-tab').style.visibility = "visible";
    document.getElementById('right-tab-div').style.visibility = "visible";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "grid";
    document.getElementById('section_4').style.display = "block";
    document.getElementById('right-tab').style.display = "inline-flex";
  });

  document.getElementById('work_button').addEventListener('click', function(){
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('code_computer').style.margin = "0 auto";
    document.getElementById('code_computer').style.width = "40%";
    document.getElementById('left-tab').style.zIndex = "1000";
    document.getElementById('left-tab').style.visibility = "visible";
    document.getElementById('left-tab-div').style.visibility = "visible";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_3').style.display = "block";
    document.getElementById('section_5').style.display = "block";
    document.getElementById('left-tab').style.display = "inline-flex";
  });

  document.getElementById('left-tab').addEventListener('click', function(){
    document.getElementById('left-tab').style.display = "none";
    document.getElementById('right-tab').style.visibility = "visible";
    document.getElementById('right-tab-div').style.visibility = "visible";
    document.getElementById('right-tab').style.display = "inline-flex";
    document.getElementById('right-tab').style.zIndex = "0";
    document.getElementById('right-tab').style.zIndex = "1000";
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('cartoon_computer').style.margin = "0 auto";
    document.getElementById('cartoon_computer').style.width = "40%";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "grid";
    document.getElementById('section_4').style.display = "block";
    document.getElementById('section_3').style.display = "none";
    document.getElementById('section_5').style.display = "none";
  });

  $("#left-tab").hover(function(){
    $("#left-tab-div").css("visibility", "visible");
    }, function(){
    $("#left-tab-div").css("visibility", "hidden");
  });

  document.getElementById('right-tab').addEventListener('click', function(){
    document.getElementById('right-tab').style.display = "none";
    document.getElementById('left-tab').style.visibility = "visible";
    document.getElementById('left-tab-div').style.visibility = "visible";
    document.getElementById('left-tab').style.display = "inline-flex";
    document.getElementById('left-tab').style.zIndex = "0";
    document.getElementById('left-tab').style.zIndex = "1000";
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('code_computer').style.margin = "0 auto";
    document.getElementById('code_computer').style.width = "40%";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "none";
    document.getElementById('section_4').style.display = "none";
    document.getElementById('section_3').style.display = "block";
    document.getElementById('section_5').style.display = "block";
  });

  $("#right-tab").hover(function(){
    $("#right-tab-div").css("visibility", "visible");
    }, function(){
    $("#right-tab-div").css("visibility", "hidden");
  });

  $("#artwork_auto_scroll").on('click', function(event) {
    // Makes sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $("#case_studies_auto_scroll").on('click', function(event) {
    // Makes sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $("#artwork_auto_scroll_2").on('click', function(event) {
    // Makes sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  /* var charcoal_list = document.getElementsByClassName("charcoal");
  document.getElementById("charcoal_filter").addEventListener("click", function(){
    var first = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.opacity = "0";
      }
        setTimeout(second, 500);
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.visibility = "visible";
        }
        setTimeout(second, 500);
      }
    };

    var second = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.visibility = "hidden";
      }
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.opacity = "1";
        }
      }
      //document.getElementById("charcoal").style.display = "none";
    };

    first();

  }); */

    document.getElementById("add_to_list").onclick = function(){
      var list = document.getElementById("list");
      var create_list_item = document.createElement("li");
      var new_list_item = create_list_item;
      new_list_item.innerHTML = "List Item";
      list.appendChild(new_list_item);
      setTimeout(function(){
        new_list_item.className = new_list_item.className + " show";
      }, 100);
    }

    /*$('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.card').not('.charcoal').animate({width: 'hide'}, 600);
      }else if(document.getElementById("charcoal_filter").checked == false){
        $('.card').not('.charcoal').animate({width: 'show'}, 600, 'linear');
      }
    });*/

    /* BEST ONE SO FAR
    $('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.charcoal').animate({width: 'show'}, 600);
        if ($("input:checkbox:not(:checked)")){
          $('.card').not(".charcoal").animate({width: 'hide'}, 600);
        }
      } else if(document.getElementById("charcoal_filter").checked == false){
        $('.charcoal').animate({width: 'hide'}, 600);
      }
    });*/

 //for filters
    var filter = document.getElementsByClassName('filter_button');
    $("#charcoal_button").click(function(){
        if($("#charcoal_button").hasClass('clicked')){
          $("#charcoal_button").removeClass('clicked');
          $("#charcoal").removeClass('show');
          $(".charcoal").animate({width: 'hide'}, 600);
        }else if(!$("#charcoal_button").hasClass('clicked')){
          $("#charcoal_button").addClass('clicked');
          $(".charcoal").addClass('show');
          $(".charcoal").animate({width: 'show'}, 600);
        }
        for(var i=0; i<filter.length; i++){
          if(!$(filter[i]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#pencil_button").click(function(){
        if($("#pencil_button").hasClass('clicked')){
          $("#pencil_button").removeClass('clicked');
          $(".pencil").removeClass('show');
          $(".pencil").animate({width: 'hide'}, 600);
        }else if(!$("pencil_button").hasClass('clicked')){
          $("#pencil_button").addClass('clicked');
          $(".pencil").addClass('show');
          $(".pencil").animate({width: 'show'}, 600);
        }
        for(var j=0; j<filter.length; j++){
          if(!$(filter[j]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#logo_button").click(function(){
        if($("#logo_button").hasClass('clicked')){
          $("#logo_button").removeClass('clicked');
          $(".logo").removeClass('show');
          $(".logo").animate({width: 'hide'}, 600);
        }else if(!$("logo_button").hasClass('clicked')){
          $("#logo_button").addClass('clicked');
          $(".logo").addClass('show');
          $(".logo").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#mockup_button").click(function(){
        if($("#mockup_button").hasClass('clicked')){
          $("#mockup_button").removeClass('clicked');
          $(".mockup").removeClass('show');
          $(".mockup").animate({width: 'hide'}, 600);
        }else if(!$("mockup_button").hasClass('clicked')){
          $("#mockup_button").addClass('clicked');
          $(".mockup").addClass('show');
          $(".mockup").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#graphic_button").click(function(){
        if($("#graphic_button").hasClass('clicked')){
          $("#graphic_button").removeClass('clicked');
          $(".graphic").removeClass('show');
          $(".graphic").animate({width: 'hide'}, 600);
        }else if(!$("graphic_button").hasClass('clicked')){
          $("#graphic_button").addClass('clicked');
          $(".graphic").addClass('show');
          $(".graphic").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#misc_button").click(function(){
        if($("#misc_button").hasClass('clicked')){
          $("#misc_button").removeClass('clicked');
          $(".misc").removeClass('show');
          $(".misc").animate({width: 'hide'}, 600);
        }else if(!$("misc_button").hasClass('clicked')){
          $("#misc_button").addClass('clicked');
          $(".misc").addClass('show');
          $(".misc").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });


});
