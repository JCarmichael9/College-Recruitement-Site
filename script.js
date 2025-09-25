let cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
}