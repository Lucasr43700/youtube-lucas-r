let isClicked = false;

let bouton = document.getElementById('btn');

let body = document.querySelector("body");

bouton.addEventListener('click',function(){

    if (isClicked == false) {
   isClicked = true;
body.style.backgroundColor = "black";
body.style.color = "white";
 }

  else {
    isClicked = false;
    body.style.backgroundColor = "white";
    body.style.color = "black";

  }
   

})
function save() {
let iframe = document.getElementById("iframeCode").value;
window.localStorage.setItem("iframe" + +new Date(), iframe);
window.location.reload();

}


window.onload = function load() {

  let iframes = {
      ...localStorage,
  };

  
  let html = "";
  for ([key, iframe] of Object.entries(iframes)) {
      html +=
          iframe +
          `<button class="delete" style="position:relative;left:-30px;top:-10px" data-key="${key}">X</button>`;
  }


  document.querySelector(".video-play").innerHTML = html;
  document.querySelectorAll("button.delete").forEach((button) => {
      button.addEventListener("click", () => {
          window.localStorage.removeItem(button.dataset.key);
          window.location.reload();
      });
  });
};
  
