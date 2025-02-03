document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');

    openSidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open'); // Adiciona ou remove a classe 'open'
    });
});