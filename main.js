let url = " https://api.github.com/users";

const search = document.querySelector("#search");

const form = document.querySelector("#form");

const btn = document.querySelector(".btn");

const card = document.querySelector(".cards");

search.addEventListener("keyup", (e) => {
  let url = ` https://api.github.com/users/${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      card.innerHTML = `<li class="list">
      <img src="${data.avatar_url}" alt="" />
      <h2 class="h2">Nomi:     ${e.target.value}</h2>
      <a href="${data.html_url}"><button class="btn1">GitHub Havola</button></a>
      <p class="p3"></p>
    </li>`;
    
    });
});
