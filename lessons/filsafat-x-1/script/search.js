const searchinput = document.querySelector("#search-input");
searchinput.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let cards = document.querySelectorAll('.header-card');
  cards.forEach(card2 => {
    if (card2.textContent.toLowerCase().includes(currentValue)) {
      card2.parentNode.style.display = "block";
    } else {
      card2.parentNode.style.display = "none";
    }
  })
});