document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('front');
    });
});

document.querySelectorAll('.three').forEach(three => {
    three.addEventListener('click', function() {
        this.classList.toggle('front-three');
    });
});