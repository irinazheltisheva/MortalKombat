const $arenas = querySelector(`arenas`);

const player1 = {
    player: 1;
    name: `SCORPION`;
    hp: 90;
    img: `https://reactmarathon-api.herokuapp.com/assets/scorpion.gif`;
    weapon: [`fire`, `ice`],
    attack: function () {
        console.log(this.name + `Fight...`)
    }
}

function createElement(tag, className) {

}

function className() {

}

const player2 = {
    player: 2;
    name: `KITANA`;
    np: 70;
    img: `https://reactmarathon-api.herokuapp.com/assets/kitana.gif`;
    weapon: [`fire`, `ice`],
    attack: function () {
        console.log(this.name + `Fight...`)
    }

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    $tag.classList.add(className);
}
    return $tag;
}

function createPlayer(playerClass, playerName, playerObj) {
    const $player = createElement(`div`, `classPlayer`);
    $player.classList.add(playerClass);

    function changeHP(player) {
        const $playerLive = Document.querySelector(`.player2 `+player+`.live`);
        player.hp -= 20;
        $playerLive.style.width = player.hp + `%`;

        if (player.hp < 0) {
            $arenas.appendChild(playerLose(playerName));

        }
    }

    function playerLose(name) {
        const $loseTitle = createElement(`div`, `loseTitle`);
        $LeseTitle.innerText = name + `lose`;

        return $loseTitle;
    }

    createElement(`div`, `progressBar`);
    let $progressBar;
    $progressBar.classList.add(`progressBar`);

    const $life = createElement(`div`, `live`);
    $life.classList.add(`live`);

    $life.style.width = playerName.hp + `100%`;
    let playerObj;
    $name.innerText = playerObj.name;
    $img.scr = playerObj.img;

    const $name = createElement(`div`, `name`);
    $name.classList.add(`name`);
    $name.innerText = playerName.name;

    const $character = createElement(`div`, `character`);
    $character.classList.add(`character`);

    const $img = createElement(`img`);
    $img.src = playerObj.img;

    return $player;
}

let $randomButton;
$randomButton.addEventListener(`click`, function ()) {
    console.log(`####click Random Button`);
    changeHP(player1);
    changeHP(player2);
    $randomButton.disabled = true

})
    $arenas.appendChild(createPlayer( `player1`));
    $arenas.appendChild(createPlayer(`player2`));