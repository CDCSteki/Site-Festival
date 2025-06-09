const searchBar = document.getElementById('search-bar');
const genreFilter = document.getElementById('genre-filter');
const artistsGrid = document.getElementById('artists-grid');
const artistCards = document.querySelectorAll('.artist-card');

const noResultsMessage = document.createElement('p');
noResultsMessage.textContent = 'Niciun artist nu a fost găsit.';
noResultsMessage.style.textAlign = 'center';
noResultsMessage.style.marginTop = '2rem';
noResultsMessage.style.display = 'none';
artistsGrid.parentNode.appendChild(noResultsMessage);

function filterArtists() {
    const searchText = searchBar.value.toLowerCase();
    const selectedGenre = genreFilter.value;

    let anyVisible=false;

    artistCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const genre = card.dataset.genre;

        const matchesSearch = name.includes(searchText);
        const matchesGenre = selectedGenre === 'all' || genre.includes(selectedGenre);

        if (matchesSearch && matchesGenre) {
            card.style.display = '';
            anyVisible=true;
        } else {
            card.style.display = 'none';
        }
    });
    noResultsMessage.style.display = anyVisible ? 'none' : '';
}

searchBar.addEventListener('input', filterArtists);
genreFilter.addEventListener('change', filterArtists);