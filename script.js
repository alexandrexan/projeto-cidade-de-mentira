(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
        reveals.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px",
        }
    );

    reveals.forEach((el) => observer.observe(el));
})();
