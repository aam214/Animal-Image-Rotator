const photoContainer = document.querySelector(".container");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
//for transform
let n = 0;


backButton.addEventListener("click", () => {
//45 degrees
  n = n + 45;
  updateImageGallery();
});

nextButton.addEventListener("click", () => {
  n = n - 45; 
  updateImageGallery();
})

let updateImageGallery = () => {
  photoContainer.style.transform =
`perspective(1000px) rotateY(${n}deg)`;

setTimeout(() => {
  n = n - 45;
  updateImageGallery();
}, 3500);
}
updateImageGallery();