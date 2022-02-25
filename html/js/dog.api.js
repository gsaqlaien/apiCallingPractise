
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));

    const displayDog = (doglist) => {
        const main = document.getElementById('main');
        const first10Data = doglist.slice(0, 10);

        for (dog of first10Data) {
            const div = document.createElement('div');
            div.className = "col - lg - 2";
            console.log(dog);
            div.innerHTML = `
            <h2>${dog.name}</h2>
            <h3>${dog.breed_group}</h3>
            <p>${dog.temperament}</p>
            <img width = "400px" height ="250px" src = "${dog.image.url}"/>;
    
            `;
            console.log(div)
            main.appendChild(div);

        }
    }

}