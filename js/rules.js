document.addEventListener('DOMContentLoaded', function () {
    const scrollTop = document.getElementById('scroll-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 320) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });

    scrollTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('details.spoiler').forEach(function (element) {
        element.addEventListener('toggle', function () {
            if (this.open) {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
});