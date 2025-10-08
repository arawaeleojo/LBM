document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.05 // Trigger when 5% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element scrolls INTO view, add 'active' to trigger animation.
                entry.target.classList.add('active');
                
                // IMPORTANT: The 'unobserve' call is removed, allowing the animation to repeat.
            } else {
                // When element scrolls OUT OF view, remove 'active'.
                // This resets the element to its initial, hidden state (opacity: 0, translateY(30px)),
                // allowing it to animate again the next time it scrolls into view.
                entry.target.classList.remove('active'); 
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        observer.observe(el);
    });
});
