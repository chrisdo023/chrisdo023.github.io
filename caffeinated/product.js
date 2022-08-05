function displaySRC(){
    let status = document.getElementById("src").style.display;

    if(status == 'block'){
        document.getElementById("src").style.display = 'none';
    } else {
        document.getElementById("src").style.display = 'block';
    }
}