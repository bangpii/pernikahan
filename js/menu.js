// menuToggle.addEventListener("click", function (e) {
//   e.preventDefault();
//   nav.classList.toggle("active");
//   overlay.classList.toggle("active");

//   // Cegah scroll
//   document.body.style.overflow = nav.classList.contains("active")
//     ? "hidden"
//     : "";
// });

// overlay.addEventListener("click", function () {
//   nav.classList.remove("active");
//   overlay.classList.remove("active");

//   // Balikin scroll
//   document.body.style.overflow = "";
// });

function enableDragScroll(containerSelector) {
  const el = document.querySelector(containerSelector);
  let isDown = false;
  let startX;
  let scrollLeft;

  el.addEventListener("mousedown", (e) => {
    isDown = true;
    el.classList.remove("scrolling"); // hentikan animasi
    el.style.animationPlayState = "paused";
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  el.addEventListener("mouseleave", () => {
    isDown = false;
    el.style.animationPlayState = "running";
  });

  el.addEventListener("mouseup", () => {
    isDown = false;
    el.style.animationPlayState = "running";
  });

  el.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  });

  // Untuk sentuhan di HP
  el.addEventListener("touchstart", (e) => {
    el.style.animationPlayState = "paused";
    startX = e.touches[0].clientX;
    scrollLeft = el.scrollLeft;
  });

  el.addEventListener("touchmove", (e) => {
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  });

  el.addEventListener("touchend", () => {
    el.style.animationPlayState = "running";
  });
}

// Aktifkan untuk galeri 1 dan 2
enableDragScroll(".galery1");
enableDragScroll(".galery2");

// PopUPBOX
 const popupOverlay = document.getElementById("popup-overlay");
 const giftIcon = document.querySelector("#gift");
 const popupClose = document.getElementById("popup-close");

 giftIcon.addEventListener("click", function (e) {
   e.preventDefault();
   popupOverlay.style.display = "flex";
 });

 // Klik luar box tutup
 popupOverlay.addEventListener("click", function (e) {
   if (e.target === popupOverlay) {
     popupOverlay.style.display = "none";
   }
 });

 // Klik X tutup
 popupClose.addEventListener("click", function () {
   popupOverlay.style.display = "none";
 });


 const mapOverlay = document.getElementById("popup-map-overlay");
 const mapButton = document.getElementById("map");
 const closeMap = document.getElementById("popup-close-map");

 // Buka popup
 mapButton.addEventListener("click", function (e) {
   e.preventDefault();
   mapOverlay.style.display = "flex";
 });

 // Tutup popup saat klik luar elemen box
 mapOverlay.addEventListener("click", function (e) {
   if (e.target === mapOverlay) {
     mapOverlay.style.display = "none";
   }
 });

 // Tutup popup saat klik tombol X
 closeMap.addEventListener("click", function () {
   mapOverlay.style.display = "none";
 });
