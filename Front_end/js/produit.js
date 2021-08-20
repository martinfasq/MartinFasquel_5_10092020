console.log("produit");

function getProductData() {
  fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    //   .then((dataValue) => console.log(dataValue))
    .then((dataValue) => showData(dataValue));
}
getProductData();

function showData(data) {
  document.getElementById("name").textContent = data.name;
}
