// Opcional: Interacción o animación
const ramo = document.getElementById('ramo');

ramo.addEventListener('mouseover', () => {
    ramo.style.transform = 'translateX(-50%) rotate(-5deg)';
});

ramo.addEventListener('mouseout', () => {
    ramo.style.transform = 'translateX(-50%) rotate(-15deg)';
});
