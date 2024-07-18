// Quando clicar irá mostrar as informações das insígnias //
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Quando clicar fora da tela ou no 'X' nas informações das insignias a tela(de informações) irá fechar //
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Função para exibir ou esconder os detalhes
function toggleAchievements(contentId, arrowId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}