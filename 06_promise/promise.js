//PROMISES: create request without callback function

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  ajax.then(data => showData(data)).catch(error => console.log(error));
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

// function getPerson(cb) {
//   const url = `https://randomuser.me/api/`;

//   const ajax = new XMLHttpRequest();

//   ajax.open("GET", url, true);

//   ajax.onload = function() {
//     if ((this.status = 200)) {
//       cb(this.responseText, showData);
//     }
//   };

//   ajax.send();

//   ajax.onerror = function() {
//     console.log(`there was an error`);
//   };
// }

// function getData(response, cb) {
//   const data = JSON.parse(response);

//   const {name:{first},name:{last},picture:{large},location:{street},phone,email} = data.results[0];

//   cb(first,last,large,street,phone,email);
// }

function showData(data) {
  const response = JSON.parse(data);
  const {
    name: { first },
    name: { last }
  } = response.results[0];

  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
}
