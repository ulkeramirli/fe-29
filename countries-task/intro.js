document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const themeChange = document.getElementById('theme-change');

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeChange.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }); 
})