const getJokeBtn = document.querySelector(".btn");
const jokeText = document.querySelector(".joketext");
getJokeBtn.addEventListener("click", handleClick);

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  return response.json();
}
async function handleClick() {
  const { joke } = await fetchJoke();
  jokeText.innerText = `"${joke}"`;
}
