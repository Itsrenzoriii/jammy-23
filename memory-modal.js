const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeSpan = document.querySelector('.close');

document.querySelectorAll('.memory-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modalImg.src = btn.querySelector('img').src;
        modal.style.display = 'block';
    });
});

closeSpan.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
