//PROMISES: create request without callback function

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  // ajax.then(data => showData(data)).catch(error => console.log(error));

  fetch(`https://randomuser.me/api/`)
    .then(data => data.json())
    .then(data => showData(data))
    .catch(error => console.log(error));
});

const ajax = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  const url = `https://randomuser.me/api/`;

  xhr.open("GET", url, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(Error(xhr.status));
    }
  };

  xhr.onerror = () => {
    reject(Error("there was an error"));
  };
  xhr.send();
});

function showData(data) {
  // const response = JSON.parse(data);
  const {
    name: { first },
    name: { last }
  } = data.results[0];

  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
}

// fetch("https://randomuser.me/api/")
//   .then(data => data.json())
//   .then(data => console.log(data)).catch(error=>console.log(error))
