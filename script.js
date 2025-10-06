// Fitur sederhana: admin bisa menambahkan testimoni
const adminPassword = "paw123"; // Password admin contoh
function addTesti() {
  const pass = prompt("Masukkan password admin:");
  if (pass === adminPassword) {
    const imgUrl = prompt("Masukkan link gambar testimoni:");
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "Testi Baru";
    img.style.width = "200px";
    img.style.margin = "10px";
    document.querySelector(".testi-gallery").appendChild(img);
    alert("Testimoni berhasil ditambahkan!");
  } else {
    alert("Password salah!");
  }
}
