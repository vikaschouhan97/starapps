document.addEventListener("DOMContentLoaded", function () {
  // Select Elements
  const imageElement = document.getElementById("image");
  const uploadButton = document.getElementById("upload-button");
  const uploadInput = document.getElementById("upload-input");
  const asideDiv = document.querySelector(".aside");

  function changeImageAndColor(buttonColor, bgColor, imageLocation) {
    if (imageElement) {
      imageElement.src = imageLocation;
    }
    if (uploadButton) {
      uploadButton.style.backgroundColor = buttonColor;
    }
    document.body.style.backgroundColor = bgColor;
  }

  function handleUploadButtonClick() {
    if (uploadInput) {
      uploadInput.click();
    }
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (
      !["image/jpeg", "image/png"].includes(file.type) ||
      file.size > 5242880
    ) {
      console.error("Invalid file type or size exceeds 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (!asideDiv) return;
      const existingImage = asideDiv.querySelector(".uploaded-image");
      if (existingImage) existingImage.remove();

      const uploadedImage = document.createElement("img");
      uploadedImage.src = reader.result;
      uploadedImage.classList.add("uploaded-image");
      asideDiv.appendChild(uploadedImage);
    };

    reader.readAsDataURL(file);
  }

  // Attach event listeners dynamically
  document
    .getElementById("pink-button")
    .addEventListener("click", () =>
      changeImageAndColor("#ff4081", "#ffc1e3", "./assets/pink_umbrella.png")
    );
  document
    .getElementById("blue-button")
    .addEventListener("click", () =>
      changeImageAndColor("#2196f3", "#c7dcff", "./assets/blue_umbrella.png")
    );
  document
    .getElementById("yellow-button")
    .addEventListener("click", () =>
      changeImageAndColor("#ffc107", "#ffecb3", "./assets/yellow_umbrella.png")
    );

  if (uploadButton)
    uploadButton.addEventListener("click", handleUploadButtonClick);
  if (uploadInput) uploadInput.addEventListener("change", handleFileUpload);
});
