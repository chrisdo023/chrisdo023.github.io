const listen = (e) => {
    let key;

    let item = document.getElementById("text");

    if(e.key == "ArrowUp"){
        key = "&#8593";
    } else if(e.key == "ArrowDown"){
        key = "&#8595";
    } else if(e.key == "ArrowRight"){
        key = "&#8594";
    } else if(e.key == "ArrowLeft"){
        key = "&#8592";
    } else if(e.key == "b") {
        key = e.key;
    } else if(e.key == "a") {
        key = e.key;
    } else {
        key = ''
    }

    item.innerHTML += key;


    if(item.innerHTML == "↑↑↓↓←→←→ba"){
        item.innerHTML = "Discount Code: Konami";

        removeKeyDown();
    }
}

window.addEventListener('keydown', listen);

function removeKeyDown() {
    window.removeEventListener('keydown', listen);
}