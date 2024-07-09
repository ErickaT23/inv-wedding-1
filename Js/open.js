document.getElementById('overlay').addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    setTimeout(() => {
        this.style.display = 'none';
        document.getElementById('invitation').classList.remove('hidden');
    }, 500);
});
