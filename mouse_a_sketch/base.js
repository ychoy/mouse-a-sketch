$(document).ready(function(){

  var w = $(window).width();
  var h = $(window).height();

  buildGrid(w,h);

  var $colorPicker = $("input"),
      activeColor = $colorPicker.val();
  
  $colorPicker.on("change", function(){
    activeColor = $colorPicker.val();
  });

  $("table").on("mouseenter", "td", function(){
    $(this).css({
          "background-color": activeColor,
          "border-radius": "0"
    });
  });

});

function buildGrid(w,h){
  var row = "<tr>" + Array(Math.floor(w/10)).join("<td></td>") + "</tr>";
  var rows = Array(Math.floor(h/10)).join(row);
  $("table").html(rows)
}