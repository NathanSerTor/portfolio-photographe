// Filtrage des photos de la galerie
const boutonsFiltre = document.querySelectorAll(".filtre");
const photos = document.querySelectorAll(".photo");

boutonsFiltre.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const categorie = bouton.getAttribute("data-categorie");

    boutonsFiltre.forEach(function (btn) {
      btn.classList.remove("active");
    });

    bouton.classList.add("active");

    photos.forEach(function (photo) {
      const categoriePhoto = photo.getAttribute("data-categorie");

      if (categorie === "tous" || categorie === categoriePhoto) {
        photo.style.display = "block";
      } else {
        photo.style.display = "none";
      }
    });
  });
});

// Validation simple du formulaire
const formulaire = document.getElementById("formContact");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (nom === "" || email === "" || message === "") {
    confirmation.textContent = "Veuillez remplir tous les champs.";
    confirmation.style.color = "orange";
  } else {
    confirmation.textContent = "Merci " + nom + ", votre message a été envoyé.";
    confirmation.style.color = "lightgreen";
    formulaire.reset();
  }
});