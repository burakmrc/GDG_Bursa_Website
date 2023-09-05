// const resim = document.getElementById("resim");

// resim.addEventListener("mouseover", function() {
//     resim.src = "./public/mehmet.png";
// });

// resim.addEventListener("mouseout", function() {
//     resim.src = "./public/mehmet-yapay-zeka.jpg";
// });

const uyeDivleri = document.querySelectorAll('.our-team');

// Her üye divi için bir döngü oluşturun
uyeDivleri.forEach((uyeDiv) => {
  // Üye divine mouse girişi ve çıkışı olaylarını ekleyin
  uyeDiv.addEventListener('mouseenter', () => {
    const img = uyeDiv.querySelector('.img-responsive');
    const yeniFoto = img.getAttribute('public/mehmet.png');
    img.src = yeniFoto;
  });

  uyeDiv.addEventListener('mouseleave', () => {
    const img = uyeDiv.querySelector('.img-responsive');
    const eskiFoto = img.getAttribute('public/mehmet-yapay-zeka.jpg');
    img.src = eskiFoto;
  });
});