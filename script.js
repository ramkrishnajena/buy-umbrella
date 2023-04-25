const li = document.querySelectorAll("li");
const uploadSection = document.querySelector(".upload--btn");
const inputImage = document.getElementById("imageFile");
const uploadIcon = document.getElementById("upload-icon");
const brandLogo = document.getElementById("brand-logo");
const productImage = document.getElementById("product-image");
const loaderIcon = document.querySelector(".loader-icon");
const uploadLoaderIcon = document.querySelector(".upload-loader-icon");
const btn = document.querySelector(".btn");

//  eventlistener added to upload
inputImage.addEventListener("change", uploadLogo);
//  function to add logo into umbrella
let loader = true;
brandLogo.addEventListener("load", () => loadSpinner(loader));
function uploadLogo(event) {
  const file = event.target.files[0];

  //   validating is the file type is jpg or png
  validateFile(file);
}

function validateFile(file) {
  const p = document.createElement("p");
  p.style.color = "red";

  if (file.type !== ("image/png" || "image/jng" || file.size > 5000000)) {
    p.innerText = "Please Choose an .png or .jpg file less that 5MB";
    uploadSection.insertAdjacentElement("afterend", p);
    setTimeout(() => (p.innerText = ""), 2000);
  } else {
    brandLogo.src = URL.createObjectURL(file);
    btn.innerText = file.name;
    brandLogo.style.display = "block";
  }
}

// spinner function
function loadSpinner(loader, colorLoader) {
  setTimeout(() => {
    loadSpinner(false, false);
  }, 1000);
  if (loader) {
    productImage.style.display = "none";
    brandLogo.style.display = "none";
    loaderIcon.style.display = "block";
    uploadIcon.style.display = "none";
    uploadLoaderIcon.style.display = "block";
  } else if (colorLoader) {
    productImage.style.display = "none";
    loaderIcon.style.display = "block";
    brandLogo.style.display = "none";
  } else {
    productImage.style.display = "block";
    brandLogo.style.display = "block";
    loaderIcon.style.display = "none";
    uploadIcon.style.display = "block";
    uploadLoaderIcon.style.display = "none";
  }
}

// umbrella color selector function
Object.values(li).map((data, index) => {
  data.addEventListener("click", () => loadSpinner("", loader));
  data.addEventListener("click", function changeUmbrella(e) {
    switch (index) {
      case 0:
        productImage.src = "assets/Pink umbrella.png";

        break;
      case 1:
        productImage.src = "assets/Blue umbrella.png";

        break;
      case 2:
        productImage.src = "assets/Yello umbrella.png";

        break;

      default:
        productImage.src = "./assets/Pink umbrella.png";
    }
  });
});
