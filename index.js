const photoContainer = document.querySelector(".container");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
let timer;
let n = 0;



backButton.addEventListener("click", () => {
//45 degrees
  n = n + 45;
  clearTimeout(timer);
  updateImageGallery();
});

nextButton.addEventListener("click", () => {
  //console.log("clicked!");
  n = n - 45; 
  clearTimeout(timer);
  updateImageGallery();
})

const updateImageGallery = () => {
photoContainer.style.transform =
`perspective(1000px) rotateY(${n}deg)`;

timer = setTimeout(() => {
  n = n - 45;
  updateImageGallery();
}, 3000);
}
updateImageGallery();