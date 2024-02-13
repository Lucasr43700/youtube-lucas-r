let isClicked = false;

let bouton = document.getElementById('btn');

let body = document.querySelector("body");

bouton.addEventListener('click',function(){

    if (isClicked == false) {
   isClicked = true;
body.style.backgroundColor = "black";
body.style.color = "white";
bouton.classList.replace("btn-dark", "btn-light");
bouton.innerHTML = 'Mode Light';
 }

  else {
    isClicked = false;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    bouton.classList.replace("btn-light", "btn-dark");
    bouton.innerHTML = 'Mode sombre';
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
  

// Searchbar

// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
  // Ajoute un écouteur d'événements au formulaire de recherche lorsque soumis
  document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

      // Récupère la valeur de recherche saisie par l'utilisateur
      var searchTerm = document.getElementById("searchInput").value;

      // Appelle les fonctions pour souligner les termes de recherche dans les titres et les URL des vidéos
      highlightTitles(searchTerm);
      highlightVideoURLs(searchTerm);
  });
});

// Fonction pour souligner les termes de recherche dans les titres des vidéos
function highlightTitles(searchTerm) {
  // Sélectionne tous les éléments ayant la classe .title-video (les titres des vidéos)
  var titles = document.querySelectorAll('.title-video');

  // Parcourt tous les titres des vidéos
  titles.forEach(function(title) {
      // Récupère le texte du titre
      var titleText = title.textContent;
      // Remplace tous les occurrences du terme de recherche par le terme souligné dans le texte du titre
      var newText = titleText.replace(new RegExp(searchTerm, "gi"), function(match) {
          return '<span class="highlight">' + match + '</span>';
      });
      // Remplace le texte du titre par le nouveau texte contenant les termes soulignés
      title.innerHTML = newText;
  });
}

// Fonction pour mettre en évidence les URL des vidéos contenant les termes de recherche
function highlightVideoURLs(searchTerm) {
  // Sélectionne tous les éléments <iframe> sur la page (les vidéos incorporées)
  var iframes = document.querySelectorAll('iframe');

  // Parcourt tous les éléments <iframe> sur la page
  iframes.forEach(function(iframe) {
      // Récupère l'URL de la vidéo depuis l'attribut src de l'élément <iframe>
      var videoURL = iframe.getAttribute('src');
      // Vérifie si l'URL de la vidéo contient le terme de recherche
      if (videoURL.includes(searchTerm)) {
          // Met en évidence la vidéo en ajoutant une bordure jaune
          //iframe.style.border = "3px solid crimson";
      }
  });
}

