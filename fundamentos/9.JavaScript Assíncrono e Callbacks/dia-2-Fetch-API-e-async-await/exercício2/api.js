const ul = document.getElementById('coins-list')

const coins = () => {
  fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i += 1) {
        const createLi = document.createElement('li');
        createLi.innerText = `${data.data[i].name} (${data.data[i].symbol}): ${data.data[i].priceUsd}`
        ul.appendChild(createLi);
      }
    }).catch((error) => console.log(error))
};

window.onload = () => coins(); 
