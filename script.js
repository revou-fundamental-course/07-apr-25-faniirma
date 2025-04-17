// === Tampilkan waktu saat ini ===
// === Hero Image Slideshow ===
const heroImages = ["asset/p2.jpg", "asset/p1.jpg", "asset/p3.jpg"];

let currentHero = 0;
const heroImgElement = document.getElementById("heroImage");

setInterval(() => {
  currentHero = (currentHero + 1) % heroImages.length;
  heroImgElement.style.opacity = 0;

  setTimeout(() => {
    heroImgElement.src = heroImages[currentHero];
    heroImgElement.style.opacity = 1;
  }, 500);
}, 4000); // ganti setiap 4 detik

function updateTime() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  document.getElementById("time").textContent = now.toLocaleString(
    "id-ID",
    options
  );
}

setInterval(updateTime, 1000);
updateTime();

// === Tangani form submit ===
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    document.getElementById("outNama").textContent = nama;
    document.getElementById("outDob").textContent = dob;
    document.getElementById("outGender").textContent = gender;
    document.getElementById("outPesan").textContent = pesan;
  });

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !dob || !gender || !message) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return false;
  }

  const form = document.querySelector(".contact-form");
  form.innerHTML = `
      <div class="thank-you-message">
        <h3>Terima kasih, <span>${name}</span>!</h3>
        <p>Data Anda telah berhasil terkirim. Berikut adalah detail yang Anda kirimkan:</p>
        <ul>
          <li><strong>Nama Lengkap:</strong> ${name}</li>
          <li><strong>Tanggal Lahir:</strong> ${dob}</li>
          <li><strong>Jenis Kelamin:</strong> ${gender}</li>
          <li><strong>Pesan:</strong> ${message}</li>
        </ul>
      </div>
    `;
  return false;
}
// Animasi scroll muncul
const sections = document.querySelectorAll(".op-section");

function handleScroll() {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
