
// toggle
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}


  // 팝업
  $(function(){
    
  
    $(".btn").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });


});