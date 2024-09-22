document.addEventListener('DOMContentLoaded', function () {
    const aosItems = document.querySelectorAll('.aos-item');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        aosItems.forEach(item => {
            const aosType = item.getAttribute('data-aos');
            const hasAnimationClass = item.classList.contains(`aos-${aosType}`);

            if (isElementInViewport(item) && !hasAnimationClass) {
                // Add the animation class
                item.classList.add(`aos-${aosType}`);
            } else if (!isElementInViewport(item) && hasAnimationClass) {
                // Remove the animation class if the element is no longer in view
                item.classList.remove(`aos-${aosType}`);
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check on page load
    handleScroll();
});
