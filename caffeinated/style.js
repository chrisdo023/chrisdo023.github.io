function getDate() {
    let today = new Date();
    let pst = today.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    });

    let date_string = pst.replace(/,/g,'') 

    document.getElementById("time").innerHTML = date_string;
}

window.onload = function() {
    getDate();
}

setInterval(getDate, 1000);