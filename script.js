// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
}); 