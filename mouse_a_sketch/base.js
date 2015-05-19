$(document).ready(function(){

  var $colorPicker = $("input"),
      activeColor = $colorPicker.val();
  
  $colorPicker.on("change", function(){
    activeColor = $colorPicker.val();
  })

  $("table").on("mouseenter", "td", function(){
    $(this).css("background-color", activeColor);
  })
})