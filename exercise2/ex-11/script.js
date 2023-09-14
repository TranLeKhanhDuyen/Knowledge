const images = [
  {
    url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: "240",
    height: "160",
  },
  {
    url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: "320",
    height: "195",
  },
  {
    url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: "500",
    height: "343",
  },
];

displayRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);  // get a random index from the images array
  const selectedImage = images[randomIndex];  // get the selected image object

  const imgElement = document.createElement("img");
  imgElement.src = selectedImage.url;
  imgElement.width = selectedImage.width;
  imgElement.height = selectedImage.height;

  const imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = ""; // clear previous images in the container (if any)

  imageContainer.appendChild(imgElement); // append the selected image to the container
};


const randomImageButton = document.getElementById("randomImageButton");
randomImageButton.addEventListener("click", displayRandomImage);

displayRandomImage();
