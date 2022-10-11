'use strict'

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gifWrap = document.getElementById('gifWrap');

searchButton.addEventListener('click', () => {
    const userRequest = searchInput.value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=bLh7J0x5JAb8pF0eFiJATzYL9ixakwSX&q=${userRequest}&limit=5&offset=0&rating=g&lang=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain'
            },
        })
        .then(response => response.json())
        .then(data => {
            gifWrap.innerHTML = '';

            console.log(data.data)

            data.data.forEach((el) => {
                const img = document.createElement('img');
                gifWrap.append(img);

                img.src = el.images.fixed_height.url;
            })
        })
        .catch(error => console.log(error));
});
