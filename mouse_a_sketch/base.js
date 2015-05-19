$(document).ready(function(){

  var $colorPicker = $("input"),
      activeColor = $colorPicker.val();
  
  $colorPicker.on("change", function(){
    activeColor = $colorPicker.val();
  });

  $("body").on("mousemove", function(event){

      if ($(event.target).is($colorPicker)){
        return false;
      }

      var $pixel = $("<div>", {
          class: "pixel",
          css: {
            top: event.pageY,
            left: event.pageX,
            background: activeColor
          }
      });

      $("body").append($pixel)

  });

});
