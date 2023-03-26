console.log('js working');
let theButtons = document.querySelectorAll("main button");

    // 2 rules for objects: 1. a name and curly braces (curly braces wrap the whole thing)
    // 2. each property has to be separated with a coma at the end of the line (NOT semicolons)

let team = {
    abdullah:  {
        name: 'Abdullah',
        role: 'the cool guy',
        nickname: 'Sultan',
        bio: 'Hello, I have 4.0 grades.'
    },

    lalaine:  {
        name: 'Lalaine',
        role: 'haha',
        nickname: 'LiL',
        bio: 'Hi, I try my best in class.'
    }
}

function getTeamData()  {
    let teamMember = this.dataset.member;
    console.log(team[teamMember]);

    document.querySelector('.member-name').textContent = team[teamMember].name;
}

theButtons.forEach(button => button.addEventListener('click',getTeamData));