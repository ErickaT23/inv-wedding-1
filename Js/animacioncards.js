document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-element");
                }
            });
        },
        {
            threshold: 0.1, // Ajusta este valor según la necesidad
        }
    );

    // Selecciona todos los elementos que quieres que tengan el efecto fade-in
    const elements = document.querySelectorAll('h1, p, div, .otra-clase');
    elements.forEach((el) => observer.observe(el));
});

