function selectLevelb(levelb) {
    const levels = document.querySelectorAll('.levelb');
    levels.forEach(lvl => {
        lvl.classList.remove('selected');
    });
    document.querySelector(`.levelb:nth-child(${levelb})`).classList.add('selected');
    alert(`Você selecionou o Nível ${levelb}`);
}

function selectLeveli(level) {
    const levels = document.querySelectorAll('.leveli');
    levels.forEach(lvl => {
        lvl.classList.remove('selected');
    });
    document.querySelector(`.leveli:nth-child(${level})`).classList.add('selected');
    alert(`Você selecionou o Nível ${level}`);
}

function selectLevela(levela) {
    const levels = document.querySelectorAll('.levela');
    levels.forEach(lvl => {
        lvl.classList.remove('selected');
    });
    document.querySelector(`.levela:nth-child(${levela})`).classList.add('selected');
    alert(`Você selecionou o Nível ${levela}`);
}


