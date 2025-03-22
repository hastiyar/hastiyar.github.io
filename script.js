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
    console.log("Trying to open link:", url);
    if (window.Bale && window.Bale.WebApp) {
        console.log("Opening link in Bale app");
        window.Bale.WebApp.openLink(url, { try_instant_view: true });
    } else {
        console.log("Bale app not available, redirecting to URL");
        window.location.href = url;
    }

    setTimeout(function() {
        if (window.Bale && window.Bale.WebApp) {
            console.log("Closing Bale app");
            window.Bale.WebApp.close();
        }
    }, 1000); 
}
