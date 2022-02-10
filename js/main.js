//js
const imageInput = document.getElementById("image-input");
function displayHouseImage() {
  const images = document.querySelectorAll(".home-image");
  const imgURL = URL.createObjectURL(imageInput.files[0]);

  images.forEach((img) => {
    img.src = imgURL;
  });
}

imageInput.addEventListener("change", displayHouseImage);

function handleSubmit(e) {
  e.preventDefault();

  const formElement = document.getElementById("form");

  //inputs
  const inspectionDateInput = document.getElementById("inspection-date");
  const receiptDateInput = document.getElementById("receipt-date");
  const inspectionFeeInput = document.getElementById("inspection-fee");
  const propertyAddressInput = document.getElementById("property-address");
  const propertyCityInput = document.getElementById("property-city");
  const propertyZipInput = document.getElementById("property-zip");
  const clientNameInput = document.getElementById("client-name");
  const clientEmailInput = document.getElementById("client-email");

  //page fields
  const street = document.querySelectorAll(".street");
  const city = document.querySelectorAll(".city");
  const zip = document.querySelectorAll(".zip");
  const receiptDate = document.querySelector(".date");
  const clientName = document.querySelector(".client-name");
  const clientEmail = document.querySelector(".client-email");
  const inspectionDate = document.querySelector(".inspection-date");
  const inspectionFee = document.querySelector(".inspection-fee");

  street.forEach((el) => {
    el.textContent = propertyAddressInput.value;
  });

  city.forEach((el) => {
    el.textContent = `${propertyCityInput.value}, Tennessee `;
  });

  zip.forEach((el) => {
    el.textContent = propertyZipInput.value;
  });

  // adding a time value prevents a UTC date, which displays the day before
  let formattedReceiptDate = new Date(`${receiptDateInput.value}T00:00`);
  let formattedInspectionDate = new Date(`${inspectionDateInput.value}T00:00`);

  receiptDate.textContent = formattedReceiptDate.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  clientName.textContent = clientNameInput.value;
  clientEmail.textContent = clientEmailInput.value;
  inspectionDate.textContent = formattedInspectionDate.toLocaleDateString();
  inspectionFee.textContent = `$${inspectionFeeInput.value}.00`;

  // formElement.reset();
  // formElement.className = "go-away";

  // setTimeout(() => {
  //   formElement.style.display = "none";
  // }, 350);
}

document.getElementById("submit").addEventListener("click", handleSubmit);
