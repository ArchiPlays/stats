const title = document.getElementById('title');
const smile = document.getElementById('smile');
const meh = document.getElementById('meh');
const frown = document.getElementById('frown');
const msg = document.getElementById('last')

function displayMessage(message) {
    smile.style.display = "none";
    meh.style.display = "none";
    frown.style.display = "none";
    title.style.display = "none";
    msg.style.display = "block";
    msg.innerHTML = message;
    setTimeout(function(){
        smile.style.display = "block";
        meh.style.display = "block";
        frown.style.display = "block";
        title.style.display = "block";
        msg.style.display = "none";
    }, 2000);
}

smile.addEventListener('click', () => {
    displayMessage("Thanks for the feedback!")
    const http = new XMLHttpRequest();
    http.open('POST', 'https://cors-anywhere.herokuapp.com/https://let-s-move-statistics.firebaseapp.com');
    http.setRequestHeader('Access-Control-Allow-Origin', true)
    http.send("smile!")
    console.log('sent request!')
    console.log(http.response);
});

meh.addEventListener('click', () => {
    displayMessage("Thanks for the feedback!")
    const http = new XMLHttpRequest();
    http.open('POST', 'https://cors-anywhere.herokuapp.com/https://let-s-move-statistics.firebaseapp.com');
    http.setRequestHeader('Access-Control-Allow-Origin', true)
    http.send("meh!")
    console.log('sent request!')
    console.log(http.response);
});

frown.addEventListener('click', () => {
    displayMessage("Thanks for the feedback!")
    const http = new XMLHttpRequest();
    http.open('POST', 'https://cors-anywhere.herokuapp.com/https://let-s-move-statistics.firebaseapp.com');
    http.setRequestHeader('Access-Control-Allow-Origin', true)
    http.send("frown!")
    console.log('sent request!')
    console.log(http.response);
});