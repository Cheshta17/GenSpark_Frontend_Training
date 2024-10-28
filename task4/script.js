document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.image-container').forEach(c => c.classList.remove('active'));
        container.classList.add('active');
    });
});
