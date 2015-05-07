$(document).ready(function(){

  var $colorPicker = $("input"),
      activeColor = $colorPicker.val();
  
  $colorPicker.on("change", function(){
    activeColor = $colorPicker.val();
  })

  $("td").on("mouseenter", function(){
    $(this).css("background-color", activeColor);
  })
})