const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');

            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', `The official portrait of ${prophet.name} ${prophet.lastname}.`);

            card.append(h2);
            card.append(img);

            document.querySelector('div.cards').append(card);
        });

    });