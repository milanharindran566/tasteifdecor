$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
           $("#mycarousel").carousel('pause');
           $("#carouselButton").children("span").removeClass('fa-pause');
           $("#carouselButton").children("span").addClass('fa-play');
       }
       else if ($("#carouselButton").children("span").hasClass('fa-play')){
           $("#mycarousel").carousel('cycle');
           $("#carouselButton").children("span").removeClass('fa-play');
           $("#carouselButton").children("span").addClass('fa-pause');
       }
    });

    function search()
    {
     if ($.browser.msie)
    $(document).keydown(function(e) { if (e.keyCode == 8) window.event.keyCode = 0;});
     let text =document.getElementById('myInput').value.toUpperCase();
     let ul =document.getElementById('myUL');
     let li = ul.getElementsByTagName('li');
     for(var i=0; i<li.length ; i++)
     {
       let a = li[i].getElementsByTagName('a')[0];
       let textvalue = a.textContent || a.innerHTML;
         if(textvalue.toUpperCase().indexOf(text) > -1)
         {
                   li[i].style.visibility = "visible";
         }
         else
         {
            li[i].style.display = "none";
               }
     }
    }
