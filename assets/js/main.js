let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('bg-white');
                document.querySelector('nav ul a[href*=' + id + ']').classList.add('bg-white');
            });
        };
    });
};
