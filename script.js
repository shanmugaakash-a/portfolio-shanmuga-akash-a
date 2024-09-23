function switchTab(tabId) {
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab-link[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    localStorage.setItem('activeTab', tabId);

        if (tabId === 'resume') {
            triggerSkillAnimation();
        }
    }

    function triggerSkillAnimation() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.setProperty('--progress-width', percentage + '%');

        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 200);
    });
}

document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        switchTab(this.getAttribute('data-tab'));
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        switchTab(savedTab);
    } else {
        switchTab('about');
    }
});
document.querySelector('.toggle-button').addEventListener('click', function() {
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        this.textContent = 'Hide Contacts';
    } else {
        contactInfo.style.display = 'none';
        this.textContent = 'Show Contacts';
    }
});