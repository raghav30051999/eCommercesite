function showKidsWear() {
  var kidsList = document.getElementById("kidsList");
  kidsList.style.display = "block";
  
  var mensList = document.getElementById("mensList");
  mensList.style.display = "none";

  var womensList = document.getElementById("womensList");
  womensList.style.display = "none";
}

function showMensWear() {
  var mensList = document.getElementById("mensList");
  mensList.style.display = "block";
  
  var kidsList = document.getElementById("kidsList");
  kidsList.style.display = "none";

  var womensList = document.getElementById("womensList");
  womensList.style.display = "none";
}

function showWomensWear() {
  var mensList = document.getElementById("mensList");
  mensList.style.display = "none";
  
  var kidsList = document.getElementById("kidsList");
  kidsList.style.display = "none";

  var womensList = document.getElementById("womensList");
  womensList.style.display = "block";
}

var images = [
  "homepageimg1.jpg",
  "homepageimg2.png",
  "homepageimg3.png",
  "homepageimg4.jpeg",
  "homepageimg5.png"
];

var currentIndex = 0; // Index of the currently displayed image

// Function to display the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
}

// Function to display the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackgroundImage();
}

// Function to update background image of .container2
// Function to update background image of .container2 and toggle covertext visibility
function updateBackgroundImage() {
  var container = document.querySelector(".container2");
  var coverText = document.querySelector(".covertext");
  var imageUrl = "url('" + images[currentIndex] + "')";
  container.style.backgroundImage = imageUrl;
  console.log("Background image updated to:", imageUrl);
  
  // Toggle covertext visibility based on current index
  coverText.style.display = currentIndex === 0 ? "block" : "none";
}

