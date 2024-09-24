const photoContainer = document.querySelector(".container");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
//for transform
let n = 0;
let timer;


backButton.addEventListener("click", () => {
//45 degrees
  n = n + 45;
  clearTimeout(timer);
  updateImageGallery();
});

nextButton.addEventListener("click", () => {
  n = n - 45; 
  clearTimeout(timer);
  updateImageGallery();
})

let updateImageGallery = () => {
  photoContainer.style.transform =
`perspective(1000px) rotateY(${n}deg)`;

timer = setTimeout(() => {
  n = n - 45;
  updateImageGallery();
}, 3500);
}
updateImageGallery();