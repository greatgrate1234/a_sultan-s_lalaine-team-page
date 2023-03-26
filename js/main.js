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

/* FOR THE ABOUT.HTML */
console.log('js working!');
let theAboutButtons = document.querySelectorAll("main button");

let team = {
    abdullah:  {
        name: 'Abdulla Sultan',
        role: 'The cool guy',
        nickname: 'Sultan',
        bio: 'Hello I have 4.0 grades.'
        },
    lalaine:  {
        name: 'Lalaine',
        role: 'Haha',
        nickname: 'LiL',
        bio: 'Hi, I try my best in class.'
    }
}

function getTeamData()  {
    let teamMember = this.dataset.member;
    console.log(team[teamMember]);

    document.querySelector('.member-name').textContent = team[teamMember].name;
}
theAboutButtons.forEach(button => button.addEventListener('click',getTeamData));