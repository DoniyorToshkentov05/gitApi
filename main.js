const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");
const input = document.querySelector("input");




const getData = function () {
  result.innerText = "Loading...";
  fetch(`https://api.github.com/users/${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
   
};


fetchDataBtn.addEventListener("click", getData);
