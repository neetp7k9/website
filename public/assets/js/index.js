$(function(){
  $("#recordTime").on("click",function(){
    $.get( "/insertRecord", { time: (new Date()).toLocaleString() } )
  .done(function( data ) {
    $("#timeDisplay").append($("<div></div>").text((new Date()).toLocaleString())); 
  });
  });
   $.get( "/getRecords" )
  .done(function( data ) {
    $("#timeDisplay").html(data);
  });
});
