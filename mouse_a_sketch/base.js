$(document).ready(function(){

  var $colorPicker = $("input");

  $("td").on("mouseenter", function(){
    $(this).css("background-color", $colorPicker.val());
  })
  
})