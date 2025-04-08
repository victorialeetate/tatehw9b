document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        fetch('/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ title, content })
        })
        .then(res => res.text())
        .then(data => message.textContent = data)
        .catch(() => message.textContent = 'Error adding article.');
    });
});