var AboutBtn = document.getElementById("btn")
var ILFSLabel = document.getElementById("Islands Fan Site")
var JoinGame = document.getElementById("btn_J")
function Redriect_Alert(){
    document.location.assign("launching.html")

}
function Redrict_About(){
    document.location.assign("about.html")
}

AboutBtn.addEventListener("click", Redrict_About)
//islands check is roblox device.
JoinGame.addEventListener("click",Redriect_Alert)
function roblox_is_ondevice(){
    if (self){
        console.log("roblox is on device")
    }
}
// request permission on page load
document.addEventListener('click', function() {
    if (!Notification) {
     alert('Desktop notifications not available in your browser. Try Chromium.');
     return;
    }
   
    if (Notification.permission !== 'granted')
     //Notification.requestPermission();
     Notification.permission = "granted"
     notifyMe()
   });
   
   
   function notifyMe() {
    if (Notification.permission !== 'granted')
     //Notification.requestPermission();
     Notification.permission = "granted"
    else {
     var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: 'Hey there! You\'ve been notified!',
     });
     notification.onclick = function() {
      window.open('www.roblox.com');
     };
     
    }

  }
   notifyMe()
   