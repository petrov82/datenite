// static/js/app.js
function generateLetter() {
    // Simulate fetching data from APIs and determining the common letter
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const letter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('nights-letter').innerText = `Tonight's Letter: ${letter}`;

    // Simulate suggestions based on the letter
    const suggestions = {
        'A': ['Applebee\'s', 'Art Museum', 'Arcade', 'Antique Shop'],
        'B': ['Burger King', 'Botanical Garden', 'Bowling Alley', 'Bookstore'],
        'C': ['Cheesecake Factory', 'Concert', 'Comedy Club', 'Cinema'],
        'D': ['Denny\'s', 'Dave & Buster\'s', 'Dance Class', 'Dinner Cruise'],
        'E': ['Eddie\'s Diner', 'Escape Room', 'Exhibition', 'Entertainment Park']
    };

    const items = suggestions[letter].map(item => `<li>${item}</li>`).join('');
    document.getElementById('suggestions').innerHTML = `<h4>Suggestions:</h4><ul>${items}</ul>`;
}

document.getElementById('budget-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const budget = document.getElementById('budget').value;

    // Simulate fetching options based on budget
    const options = {
        '$': ['Picnic in the Park', 'Free Concert', 'Museum Free Day'],
        '$$': ['Dinner at Local Cafe', 'Movie Tickets', 'Bowling Night'],
        '$$$': ['Fine Dining Restaurant', 'Theater Show', 'Wine Tasting'],
        '$$$$': ['Weekend Getaway', 'Spa Day', 'Gourmet Cooking Class'],
        '$$$$$': ['Luxury Cruise', 'Five-Star Resort Stay', 'Helicopter Tour']
    };

    const picks = options[budget];
    const activity = picks[Math.floor(Math.random() * picks.length)];

    document.getElementById('roulette-results').innerHTML = `<h4>Your Date Idea:</h4><p>${activity}</p>`;
});
