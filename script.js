const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0; // Initially set to the first section

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink !== i) {
            links[activeLink].classList.remove('active'); // Remove active class from current link
            link.classList.add('active'); // Add active class to clicked link
            sections[activeLink].classList.remove('active'); // Remove active class from current section

            setTimeout(() => {
                activeLink = i; // Update activeLink index
                sections[i].classList.add('active'); // Add active class to the clicked section
            }, 1000); // Transition time before updating the section
        }
    });
});
