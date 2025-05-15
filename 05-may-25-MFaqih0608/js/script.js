alert('Selamat datang di webstite Travel Murah Mfaqih!');
// Auto slide banner images
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mulai auto slide setiap 3 detik
setInterval(nextSlide, 3000);

// Form validation on submit
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;

  if (!name) {
    alert('Nama harus diisi.');
    e.preventDefault();
    return;
  }

  if (!email) {
    alert('Email harus diisi.');
    e.preventDefault();
    return;
  } else {
    // Email format yang valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Format email tidak valid.');
      e.preventDefault();
      return;
    }
  }

  if (!interest) {
    alert('Silakan pilih minat Anda.');
    e.preventDefault();
    return;
  }

  // Jika lolos validasi, form bisa dikirim
});
// Selesai 
