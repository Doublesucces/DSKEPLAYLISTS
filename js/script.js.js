// JavaScript for the search bar functionality
document.getElementById('search-bar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const playlists = document.querySelectorAll('.playlist-card');

    playlists.forEach((playlist) => {
        const title = playlist.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            playlist.style.display = 'block';
        } else {
            playlist.style.display = 'none';
        }
    });
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
