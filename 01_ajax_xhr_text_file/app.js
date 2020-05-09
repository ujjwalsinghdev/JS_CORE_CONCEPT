const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

function getData(url) {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);

  console.log(ajax);

  //   ajax.onreadystatechange = function() {
  //     if (this.status === 200 && this.readyState === 4) {
  //       info.textContent = this.responseText;
  //     }
  //   };

  ajax.onload = function() {
    if (this.status === 200) {
      info.textContent = this.responseText;
    } else {
      console.log(this.statusText);
    }
  };

  ajax.send();
  ajax.onerror = function() {
    console.log(`there was an error`);
  };
}

btn.addEventListener("click", function() {
  getData("name.txt");
});
