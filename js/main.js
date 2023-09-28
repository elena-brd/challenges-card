const btnDisplayChallenges = document.getElementById('btn-display-all');
const challenge = document.querySelectorAll('.challenge');
const challengeCard = document.getElementById('challenge-card');
const container = document.querySelector('.container');
const voteCard = document.getElementById('vote-card');
const voteNow = document.querySelector('.btn-vote-now');

// display all challenges
btnDisplayChallenges.addEventListener('click', () => {
    challenge.forEach((challenges) => {
        if (challenges.classList.contains('hide')) {
            challenges.classList.remove('hide');
        } else if (challenges.classList.contains('boxing')) {
            challenges.classList.add('hide')
        }
    })
});

// remove main card and display vote card
container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        challengeCard.style.display = 'none';
        voteCard.style.display = 'block'
    }
})

// display text after voting
voteNow.addEventListener('click', () => {
    const text = document.querySelector('.text')
    text.textContent = 'Thank You!';
    text.style.padding = '2rem 4em'
    voteNow.style.display = 'none'
})
