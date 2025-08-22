// Плавная прокрутка
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Анимация счетчиков
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Анимация при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .stat-item, .format-card, .gallery-grid img');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Начальные стили для анимации
    document.querySelectorAll('.service-card, .stat-item, .format-card, .gallery-grid img').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s ease';
    });
    
    // Запуск анимаций
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', function() {
        animateCounters();
        animateOnScroll();
    });
    
    // Инициализация сразу видимых элементов
    setTimeout(animateOnScroll, 100);
});

// Параллакс эффект для героя
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    }
});