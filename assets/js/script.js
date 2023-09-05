const uye1 = document.querySelectorAll("#uye1");
const uye2 = document.querySelectorAll("#uye2");
const uye3 = document.querySelectorAll("#uye3");
const uye4 = document.querySelectorAll("#uye4");
const uye5 = document.querySelectorAll("#uye5");
const uye6 = document.querySelectorAll("#uye6");
const uye7 = document.querySelectorAll("#uye7");

// Her üye divi için bir döngü oluşturun
uye1.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/mehmet.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/mehmet-yapay-zeka.jpg";
    img.src = eskiFoto;
  });
});

uye2.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/esmanur.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/esmanur-yapay-zeka.png";
    img.src = eskiFoto;
  });
});

uye3.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "/public/merve.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "/public/merve-yapay-zeka.png";
    img.src = eskiFoto;
  });
});

uye4.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/burak.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/burak-yapay-zeka.jpg";
    img.src = eskiFoto;
  });
});
uye5.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/kadir.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/kadir-yapay-zeka.png";
    img.src = eskiFoto;
  });
});
uye6.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/dilara.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/dilara-yapay-zeka.png";
    img.src = eskiFoto;
  });
});
uye7.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener("mouseenter", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Yeni resim src'sini ayarlayın
    const yeniFoto = "./public/mehmetcan.png";
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener("mouseleave", () => {
    // Olayın gerçekleştiği belirli üye divini bulun
    const img = uyeDiv.querySelector("img");

    // Eski resim src'sini ayarlayın
    const eskiFoto = "./public/mehmetcan-yapay-zeka.png";
    img.src = eskiFoto;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("iletisimBtn");
  const lightbox = document.getElementById("contact-lightbox");
  const closeLightboxButton = lightbox.querySelector(".close-lightbox");

  contactButton.addEventListener("click", function () {
    lightbox.style.display = "block";
  });

  closeLightboxButton.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});