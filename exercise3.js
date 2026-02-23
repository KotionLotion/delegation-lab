const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function(event) {

  // 1. Guard: if clicked element is not a filter button, return early
  if (!event.target.matches('.filter-btn')) return;

  // 2. Update active class on all buttons
  filterBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // 3. Read filter value
  const filter = event.target.dataset.filter;

  // 4. Loop through cards and apply filtering
  cards.forEach(card => {

    if (filter === 'all') {
      card.classList.remove('hidden');
      return;
    }

    const shouldHide = card.dataset.category !== filter;
    card.classList.toggle('hidden', shouldHide);

  });

});