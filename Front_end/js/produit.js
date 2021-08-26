function getProductData() {
  fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    .then((dataValue) => showData(dataValue));
}
getProductData();

function showData(data) {
  document.getElementById("nameProduct").textContent = data.name;
  document.getElementById("priceProduct").textContent = (data.price + " €") ;
  document.getElementById("imgProduct").setAttribute("src", data.imageUrl);
  document.getElementById("descriptionProduct").textContent = data.description;
  document.getElementById("optionSelect").textContent = data.colors;
}



