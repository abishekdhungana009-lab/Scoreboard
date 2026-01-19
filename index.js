let hscore = document.getElementById("homescore")
let gscore = document.getElementById("guestscore")
let homepoint = 0;
let guestpoint = 0;

function homeone(){
    homepoint+=1
    hscore.textContent = homepoint
}
function hometwo(){
    homepoint+=2
    hscore.textContent = homepoint
}
function homethree(){
    homepoint+=3
    hscore.textContent = homepoint
}

function guestone(){
    guestpoint+=1
    gscore.textContent = guestpoint
}
function guesttwo(){
    guestpoint+=2
    gscore.textContent = guestpoint
}
function guestthree(){
    guestpoint+=3
    gscore.textContent = guestpoint
}
