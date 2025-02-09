document.body.classList.add('light');
document.getElementById('btnChange').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
})