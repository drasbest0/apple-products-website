console.log("✅ script.js loaded!");

function showPhone(model, display, camera, chip, ram, battery, productionYear, ios, dynamicisland, imageUrl, chipImg, iosImg) {

  const specList = document.getElementById("spec-list");
  specList.innerHTML = `
    <li style="animation-delay:0.1s"><strong>Model:</strong> ${model}</li>
    <li style="animation-delay:0.3s"><strong>Display:</strong> ${display}</li>
    <li style="animation-delay:0.5s"><strong>Camera:</strong> ${camera}</li>
    <li style="animation-delay:0.7s"><strong>Chip:</strong> ${chip}</li>
    <li style="animation-delay:0.9s"><strong>RAM:</strong> ${ram}</li>
    <li style="animation-delay:1.1s"><strong>Battery:</strong> ${battery}</li>
    <li style="animation-delay:1.3s"><strong>Production Year:</strong> ${productionYear}</li>
    <li style="animation-delay:1.5s"><strong>iOS:</strong> ${ios}</li>
    <li style="animation-delay:1.7s"><strong>dynamic island:</strong> ${dynamicisland}</li>
  `;


  const phoneImage = document.getElementById("phone-image");
  phoneImage.style.opacity = 0;
  phoneImage.style.transform = "translateX(30px)";
  phoneImage.src = imageUrl;
  phoneImage.onload = () => {
    phoneImage.style.animation = "none";
    void phoneImage.offsetWidth;
    phoneImage.style.animation = "fadeSlide 0.8s forwards";
  };


  const chipImage = document.getElementById("chip-image");
  // Attach chip overlay click
chipImage.onclick = () => {
  if (chip.includes("A15")) {
    showChipOverlay("A15");
  } else if (chip.includes("A17")) {
    showChipOverlay("A17");
  } else if (chip.includes("A18")) {
    showChipOverlay("A18");
  }
};

  const iosImage = document.getElementById("ios-image");

  chipImage.style.opacity = 0;
  iosImage.style.opacity = 0;

  chipImage.src = chipImg;
  iosImage.src = iosImg;

  chipImage.onload = () => {
    chipImage.style.animation = "none";
    void chipImage.offsetWidth;
    chipImage.style.animation = "fadeIn 0.8s forwards";
  };

  iosImage.onload = () => {
    iosImage.style.animation = "none";
    void iosImage.offsetWidth;
    iosImage.style.animation = "fadeIn 0.8s forwards";
  };
}

// Open chip overlay
document.getElementById("chip-image").addEventListener("click", () => {
  const overlay = document.getElementById("chip-overlay");
  const zoomImg = document.getElementById("chip-zoom");
  const chipText = document.getElementById("chip-text");

  // Use your local image
  zoomImg.src = "images/A15chip.png";

  // Example text (customize these points however you want)
  chipText.innerHTML = `
    <li style="animation-delay:0.1s"><strong>Architecture:</strong> 5nm design</li>
    <li style="animation-delay:0.3s"><strong>CPU:</strong> 6-core high-performance</li>
    <li style="animation-delay:0.5s"><strong>GPU:</strong> 5-core Apple GPU</li>
    <li style="animation-delay:0.7s"><strong>Neural Engine:</strong> 16-core, 15.8 trillion ops/sec</li>
  `;

  overlay.style.display = "flex";
});

// Close overlay on click outside
document.getElementById("chip-overlay").addEventListener("click", (e) => {
  if (e.target.id === "chip-overlay") {
    e.target.style.display = "none";
  }
});

// Close overlay on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("chip-overlay").style.display = "none";
  }
});

// Chip Overlay function
function showChipOverlay(chipType) {
  const overlay = document.getElementById("chip-overlay");
  const zoomImg = document.getElementById("chip-zoom");
  const chipText = document.getElementById("chip-text");

  // Pick correct image + text
  let imgSrc = "";
  let text = "";

  if (chipType === "A15") {
    imgSrc = "images/A15chip.png";
    text = `
      <li style="animation-delay:0.1s"><strong>Architecture:</strong> 5nm design</li>
      <li style="animation-delay:0.3s"><strong>CPU:</strong> 6-core</li>
      <li style="animation-delay:0.5s"><strong>GPU:</strong> 5-core Apple GPU</li>
      <li style="animation-delay:0.7s"><strong>Neural Engine:</strong> 16-core</li>
    `;
  } else if (chipType === "A17") {
    imgSrc = "images/A17prochip.png"; // make sure you have this file
    text = `
      <li style="animation-delay:0.1s"><strong>Architecture:</strong> 3nm design</li>
      <li style="animation-delay:0.3s"><strong>CPU:</strong> 6-core high-efficiency</li>
      <li style="animation-delay:0.5s"><strong>GPU:</strong> Pro-class 6-core</li>
      <li style="animation-delay:0.7s"><strong>Ray Tracing:</strong> Hardware-accelerated</li>
    `;
  } else if (chipType === "A18") {
    imgSrc = "images/A18chip.png"; // make sure you have this file
    text = `
      <li style="animation-delay:0.1s"><strong>Architecture:</strong> Next-gen 3nm+</li>
      <li style="animation-delay:0.3s"><strong>CPU:</strong> 8-core performance boost</li>
      <li style="animation-delay:0.5s"><strong>GPU:</strong> Advanced graphics engine</li>
      <li style="animation-delay:0.7s"><strong>AI:</strong> Enhanced Neural Engine</li>
    `;
  }

  // Apply
  zoomImg.src = imgSrc;
  chipText.innerHTML = text;
  overlay.style.display = "flex";
}

// Close overlay on click outside
document.getElementById("chip-overlay").addEventListener("click", (e) => {
  if (e.target.id === "chip-overlay") {
    e.target.style.display = "none";
  }
});

// Close overlay on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("chip-overlay").style.display = "none";
  }
});