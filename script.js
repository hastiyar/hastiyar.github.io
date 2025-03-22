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

function openBaleLink(link) {
    if (window.Bale && window.Bale.WebApp) {
        window.Bale.WebApp.openLink(`https://ble.ir/${link}`, { try_instant_view: true });

        setTimeout(function() {
            window.Bale.WebApp.close();
        }, 1000);
    } else {
        window.location.href = `https://ble.ir/${link}`;
    }
}

function openLink(link) {
    if (window.Bale && window.Bale.WebApp) {
        window.Bale.WebApp.openLink(`${link}`, { try_instant_view: true });

        setTimeout(function() {
            window.Bale.WebApp.close();
        }, 1000);
    } else {
        window.location.href = link;
    }
}
