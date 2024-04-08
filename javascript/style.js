function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    if (nav.classList.contains('display')) {
        nav.classList.remove('display');
    } else {
        nav.classList.add('display');
    }
}
