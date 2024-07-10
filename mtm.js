function selectLevel(level) {
    const levels = document.querySelectorAll('.level');
    levels.forEach(lvl => {
        lvl.classList.remove('selected');
    });
    document.querySelector(`.level:nth-child(${level})`).classList.add('selected');
    alert(`Você selecionou o Nível ${level}`);
}
