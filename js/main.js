(() => {

    let aButton = document.querySelector('#aButton');
    let lButton = document.querySelector('#lButton');
    let closeButton = document.querySelector('#closeBtn');
    let closeButton2 = document.querySelector('#closeBtn2');

    aButton.addEventListener('click', openOverlay);
    lButton.addEventListener('click', openOverlay2);
    closeButton.addEventListener('click', closeOverlay);
    closeButton2.addEventListener('click', closeOverlay2);



    

    function openOverlay(event) {
        document.getElementById("overlay").style.display = "block";
    }

    function openOverlay2(event) {
        document.getElementById("overlay2").style.display = "block";
    }

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    function closeOverlay2() {
        document.getElementById("overlay2").style.display = "none";
    }

})();
