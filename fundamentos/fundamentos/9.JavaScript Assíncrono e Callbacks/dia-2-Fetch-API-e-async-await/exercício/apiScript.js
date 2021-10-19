const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch('https://icanhazdadjoke.com/', myObject)
    .then((response) => response.json())
    .then((data) => document
    .getElementById('jokeContainer').innerText = data.joke);
};


window.onload = () => fetchJoke();