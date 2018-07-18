$(document).ready(function(){

  document.getElementById('view_button').addEventListener('click', function(){
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "block";
  });

  document.getElementById('work_button').addEventListener('click', function(){
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_3').style.display = "block";
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

  /* $('#charcoal_filter').on('click', function(){
    $("input:checked").each(function(index){
      answers[index] = $(this).attr('id');
    });
  */
  var charcoal_list = document.getElementsByClassName("charcoal");
  document.getElementById("charcoal_filter").addEventListener("click", function(){
    var first = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.opacity = "0";
      }
        setTimeout(second, 500);
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.display = "block";
        }
        setTimeout(second, 500);
      }
      //if(document.getElementById("charcoal").style.opacity === "0"){
        //setTimeout(second, 1000);
      //}
    };

    var second = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.display = "none";
      }
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.opacity = "1";
        }
      }
      //document.getElementById("charcoal").style.display = "none";
    };

    first();

  });

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

});
