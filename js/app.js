/**
 * Login Pop up
 */

 /*var login_wrapper = document.getElementsById("login-wrapper");
 var button_account = document.getElementById("button_account");
 
 button_account.onclick = function(){
     login_wrapper.style.display = "block";
 }*/

/** 
 * mapPage.html AND loading.html 
 * JavaScript for uploding files
 **/

var overlay = document.getElementById("overlay");
var button_import = document.getElementById("button_import");

button_import.addEventListener("change", function(){
        overlay.style.display = "block";
});

function action(){
    setTimeout(redirection, 3000);
}

function redirection(){
    window.location = "mapPage.html";
}

/**
 * MapPage.html
 * JavaScript for start message "Ready?" / "Play?"
 */
 
 var start = document.getElementById("start");
 var start_msg = document.getElementsByClassName("start_msg");
 var video = document.getElementById("learning_map");
 var pause = 0;

 var message_pause = "Play?";

 function appear(message){
    start_msg.innerHTML = "Do you want to...";
    action.innerHTML = message;
    start.style.display = "block";
 }

 function disappear(){
     start.style.display = "none";
     video.play();
 }

 video.addEventListener("click", function(){
    if(pause % 2 == 0){
        video.pause();
        appear(message_pause);
        pause += 1;
    } else {
        video.play();
        pause -= 1;
    }
 });
