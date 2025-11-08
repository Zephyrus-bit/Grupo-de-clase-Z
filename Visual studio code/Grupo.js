function toggleCategorias() {
  const contenido = document.getElementById("contenido");
  if (contenido.style.display === "none" || contenido.style.display === "") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}
