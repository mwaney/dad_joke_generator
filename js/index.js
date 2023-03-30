const submitButton = document.getElementById("submit");
const apiKey = "api key goes here";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const joke = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function fetchJoke(){
    try {
        joke.innerText = "Updating...";
        submitButton.disabled = true;
        submitButton.innerText = "Loading...";
        const response = await fetch(apiURL, options)
        const data = await response.json();
        joke.innerHTML = data[0].joke;
        submitButton.innerText = "Crack my ribs";
        submitButton.disabled = false;
    } catch (error) {
        joke.innerText = "An error happened. Please try again later";
        submitButton.innerText = "Crack my ribs";
        submitButton.disabled = false;
    }
}

submitButton.addEventListener("click", fetchJoke);