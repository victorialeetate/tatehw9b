document.getElementById('check-countries-btn').addEventListener('click', function () {
    const travelerData = {
        name: 'Victoria',
        countries: ['USA', 'Canada', 'Mexico']
    };

    fetch('/api/countries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(travelerData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});