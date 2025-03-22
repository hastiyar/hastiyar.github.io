document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        question.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

function openBaleLink(url) {
    if (window.Bale && window.Bale.WebApp) {
        window.Bale.WebApp.openLink(url, { try_instant_view: true });
    } else {
        window.location.href = url;
    }

    setTimeout(function() {
        if (window.Bale && window.Bale.WebApp) {
            window.Bale.WebApp.close();
        }
    }, 1000); 
}

window.onload = function() {
    // Call the function if needed on load
};
