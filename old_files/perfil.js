// Expandir os detalhes no perfil ou retrair //
function toggleDetails() {
    const detailsContent = document.getElementById('details-content');
    const arrow = document.getElementById('arrow');
    if (detailsContent.style.maxHeight) {
        detailsContent.style.maxHeight = null;
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        detailsContent.style.maxHeight = detailsContent.scrollHeight + "px";
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}