const player1 = {
    name: `SCORPION`;
    hp: 90;
    img: `https://reactmarathon-api.herokuapp.com/assets/scorpion.gif`;
    weapon: [`fire`, `ice`],
    attack: function () {
        console.log(this.name + `Fight...`)
    }
}

const player1 = {
    name: `KITANA`;
    np: 70;
    img: `https://reactmarathon-api.herokuapp.com/assets/kitana.gif`;
    weapon: [`fire`, `ice`],
    attack: function () {
        console.log(this.name + `Fight...`)
    }
}
function createPlayer(playerClass, playerName, obj) {
    const player = document.createElement(`div`);
    player.classList.add(playerClass);

    const arenas = document.querySelector(`arenas`);
    arenas.appendChild(player);

    const progressBar = document.createElement(`div`);
    progressBar.classList.add(`progressBar`);

     const life = document.createElement(`div`);
     life.classList.add(`live`);

     const life = document.createElement(`div`);
     life.classList.add(`live`);
     life.style.width = playerName.hp + `100%`;

     const name = document.createElement(`div`);
     name. classList.add(`name`);
     name.innerText = playerName.name;

     const character = document.createElement(`div`);
     character.classList.add(`character`);

     const img = document.createElement(`img`);
     img.src = playerName.img;

     createPlayer(`player1`, `SCORPION`);
     createPlayer(`player2`, `KITANA`);










}
