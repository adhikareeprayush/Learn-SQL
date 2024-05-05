document.addEventListener('DOMContentLoaded', () => {
    const topics = document.querySelectorAll('.id_topic');
    const navLinks = document.querySelectorAll('.nav-link');

    const showTopic = (index) => {
        topics.forEach((topic, i) => {
            topic.style.display = i === index ? 'block' : 'none';
        });
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });
        navLinks[index].classList.add('active');
    };

    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            showTopic(index);
        });
    });

    showTopic(0);
});
