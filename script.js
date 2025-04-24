// Modal Fonksiyonu
const modal = document.getElementById("modal");
const projectCards = document.querySelectorAll(".project-card");
const closeButton = document.querySelector(".close-button");
const projectDescription = document.getElementById("project-description");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    projectDescription.textContent = card.dataset.description;
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Modal dışına tıklama ile kapatma
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Sayfanın belirli bölümlerine kaydırma
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Formun gönderilmesi
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Sayfanın yenilenmesini engelle
  alert("Mesajınız gönderildi!");
  this.reset(); // Formu sıfırlama
});
