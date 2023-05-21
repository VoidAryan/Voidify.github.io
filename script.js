var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var insane=new Audio("music/Insane - AP Dhillon.mp3");
var blueEye=new Audio("music/Blue Eyes - Yo Yo Honey Singh (PagalWorld.com).mp3");
var Age19=new Audio("music/Age-19-Jass-Manak.mp3");
var letMeDown = new Audio("music/Let-Me-Down-Slowly(PaglaSongs).mp3");
var Animal= new Audio("music/Maroon 5 Animals.mp3 Song Download.mp3");
var fedUp=new Audio("music/Bazanji Fed Up .mp3")


btn1.onclick = function()
{
    var change = document.getElementById("btn1");
    if(Perfect.paused == true){
        
    Perfect.play();
    change.innerHTML = "&#9724;";
      }else{
        Perfect.pause();
     change.innerHTML = "&#9658;";
      }
      
     
     
}
btn2.onclick = function()
{
    var change = document.getElementById("btn2");
    if(UntilIFoundYou.paused == true){
      UntilIFoundYou.play();
    change.innerHTML = "&#9724;";
      }
      else{
        UntilIFoundYou.pause();
     change.innerHTML = "&#9658;";
    }
}
btn3.onclick = function()
{
    var change = document.getElementById("btn3");
    if(LoveMeLikeThat.paused){
      LoveMeLikeThat.play();
        change.innerHTML = "&#9724;";
      }else
      {
        LoveMeLikeThat.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn4.onclick = function()
{
    var change = document.getElementById("btn4");
    if(StayWithMe.paused){
      StayWithMe.play();
        change.innerHTML = "&#9724;";
      }else
      {
        StayWithMe.pause();
        change.innerHTML = "&#9658;";
      }
     
}
btn5.onclick = function()
{
    var change = document.getElementById("btn5");
    if(Ghost.paused){
      Ghost.play();
        change.innerHTML = "&#9724;";
      }else
      {
        Ghost.pause();
        change.innerHTML = "&#9658;";
      }
      
}
btn6.onclick = function()
{
    var change = document.getElementById("btn6");
    if( NightChanges.paused){
      NightChanges.play();
        change.innerHTML = "&#9724;";
      }else
      {
        NightChanges.pause();
        change.innerHTML = "&#9658;";
      }
      
}


// var song = document.getElementById("insane");
        // var song2 = document.getElementById("blueEyes")
        // var btn = document.getElementById("btn1");
        // btn.onclick = function(){
        //     if(song.paused){
        //         song.play();
        //     }else
        //     song.pause();
        // }

            // var numberOfButtons = document.querySelectorAll(".btn-play").length;
            // for (var i=0; i<numberOfButtons; i++)
            // {
            //     document.querySelectorAll(".btn-play")[i].addEventListener("click", function () {
            //         var btnId = this.id;
            //         switch(btnId){
            //             case "btn1":
            //                 console.log();
            //                 // var audio=new Audio("music/Insane - AP Dhillon.mp3");
            //                 // audio.play();
            //                 break;
            //             case "btn2":
            //             var audio=new Audio("music/Blue Eyes - Yo Yo Honey Singh (PagalWorld.com).mp3");
            //                 audio.play();
            //                 break;
            //             default:
            //         }
            //     });
            // }

                // var buttons = document.querySelectorAll(".btn-play").length;

                // for (var i = 0; i < buttons ; i++) {
                // document.querySelectorAll(".btn-play")[i].addEventListener("click", function() {
                   
                //     // alert("Button Clicked");
                //     if(document.getElementById("btn1").click==true)
                //     {
                //         alert("Button 1 Clicked")
                //     }else
                //     if(document.getElementById("btn2").click==true)
                //     {
                //         alert("btn 2 clicked")
                //     }else
                //     alert("wrong button")
                //  });
// }
